from django.shortcuts import render
from rest_framework import serializers

from .api import check_book
from users.models import User
check_book()

# Create your views here.
def index(request):
    
    return render(request, 'frontend/src/App.jsx')