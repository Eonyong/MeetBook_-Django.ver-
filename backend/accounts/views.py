from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
from .serializers import UserSerializer

def logIn(request):
    
    serializer = UserSerializer(data=request)
    
    if serializer.is_valid(raise_exception=True):
        user = serializer.save()
        
        user.set_password(request.data.get('password'))
        user.save()
        
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)