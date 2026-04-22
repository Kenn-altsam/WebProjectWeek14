from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.authtoken.models import Token

from .models import User, Review
from .serializers import (
    UserSerializer,
    ReviewSerializer,
    UserModelSerializer,
    ReviewModelSerializer,
)


# ─────────────────────────────────────────────────────────────
#  FUNCTION-BASED VIEWS  (FBV)
# ─────────────────────────────────────────────────────────────

@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    """
    POST /users/register/
    Body: { "username": "...", "email": "...", "password": "..." }
    Creates a new user and returns a token (CREATE).
    """
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        token, _ = Token.objects.get_or_create(user=user)
        return Response(
            {
                "message": "User registered successfully.",
                "token": token.key,
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email,
                },
            },
            status=status.HTTP_201_CREATED,
        )
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    """
    POST /users/login/
    Body: { "username": "...", "password": "..." }
    Authenticates the user and returns a token.
    """
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response(
            {"error": "Username and password are required."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    user = authenticate(username=username, password=password)
    if user is None:
        return Response(
            {"error": "Invalid credentials."},
            status=status.HTTP_401_UNAUTHORIZED,
        )

    token, _ = Token.objects.get_or_create(user=user)
    return Response(
        {
            "message": "Login successful.",
            "token": token.key,
            "user": {
                "id": user.id,
                "username": user.username,
                "email": user.email,
            },
        },
        status=status.HTTP_200_OK,
    )


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_view(request):
    """
    POST /users/logout/
    Header: Authorization: Token <token>
    Deletes the user's token (invalidates session).
    """
    try:
        request.user.auth_token.delete()
    except Token.DoesNotExist:
        pass
    return Response({"message": "Logged out successfully."}, status=status.HTTP_200_OK)


@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def me(request):
    """
    GET  /users/me/  – return current user profile (READ)
    PUT  /users/me/  – update current user profile (UPDATE)
    Uses UserModelSerializer (ModelSerializer).
    Link between object and authenticated user: always operates on request.user.
    """
    if request.method == 'GET':
        serializer = UserModelSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # PUT
    serializer = UserModelSerializer(request.user, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ─────────────────────────────────────────────────────────────
#  CLASS-BASED VIEWS  (CBV)
# ─────────────────────────────────────────────────────────────

class ReviewListCreateView(generics.ListCreateAPIView):
    """
    GET  /users/reviews/    – list reviews of the logged-in user (READ)
    POST /users/reviews/    – create a review linked to the logged-in user (CREATE)
    Uses ReviewModelSerializer (ModelSerializer).
    Custom manager methods: Review.objects.by_user(), Review.objects.high_rated()
    """

    serializer_class = ReviewModelSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Link between objects and authenticated user
        return Review.objects.by_user(self.request.user)

    def perform_create(self, serializer):
        # Automatically tie the new review to the current user
        serializer.save(user=self.request.user)


class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET    /users/reviews/<pk>/  – retrieve a single review (READ)
    PUT    /users/reviews/<pk>/  – update a review (UPDATE)
    DELETE /users/reviews/<pk>/  – delete a review (DELETE)
    Uses ReviewModelSerializer (ModelSerializer).
    """

    serializer_class = ReviewModelSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Users can only manage their own reviews
        return Review.objects.by_user(self.request.user)