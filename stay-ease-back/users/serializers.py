from rest_framework import serializers
from .models import User, Review
from api.models import Hotel

class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class ReviewSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    hotel = serializers.PrimaryKeyRelatedField(queryset=Hotel.objects.all())
    text = serializers.CharField()
    rating = serializers.IntegerField(min_value=1, max_value=5)

    def create(self, validated_data):
        return Review.objects.create(**validated_data)