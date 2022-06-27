from rest_framework import serializers
from django.contrib.auth import get_user_model

class UserSerializer(serializers.ModelSerializer):
    
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = get_user_model()
        fields = ['name', 'password', 'nickname', 'email', 'gender', 'age', 'profile_image', 'profile_description', 'host_point', 'guest_point']
        