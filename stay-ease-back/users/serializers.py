from rest_framework import serializers
from .models import User, Review


# ── 2 x serializers.Serializer ────────────────────────────────────────────────

class UserSerializer(serializers.Serializer):
    id       = serializers.IntegerField(read_only=True)
    username = serializers.CharField()
    email    = serializers.EmailField()
    phone    = serializers.CharField(required=False, allow_blank=True)
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class ReviewSerializer(serializers.Serializer):
    id     = serializers.IntegerField(read_only=True)
    user   = serializers.PrimaryKeyRelatedField(read_only=True)
    # ⚠️ queryset evaluated lazily via a callable — no DB hit at import time
    hotel  = serializers.PrimaryKeyRelatedField(read_only=True)
    text   = serializers.CharField()
    rating = serializers.IntegerField(min_value=1, max_value=5)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        from api.models import Hotel
        self.fields['hotel'] = serializers.PrimaryKeyRelatedField(
            queryset=Hotel.objects.all()
        )

    def create(self, validated_data):
        return Review.objects.create(**validated_data)


# ── 2 x serializers.ModelSerializer ──────────────────────────────────────────

class UserModelSerializer(serializers.ModelSerializer):
    """ModelSerializer for User — used in /users/me/ endpoint."""

    class Meta:
        model  = User
        fields = ['id', 'username', 'email', 'phone']
        read_only_fields = ['id']


class ReviewModelSerializer(serializers.ModelSerializer):
    """ModelSerializer for Review — used in CBV list/detail endpoints."""

    class Meta:
        model  = Review
        fields = ['id', 'user', 'hotel', 'text', 'rating', 'created_at']
        read_only_fields = ['id', 'user', 'created_at']