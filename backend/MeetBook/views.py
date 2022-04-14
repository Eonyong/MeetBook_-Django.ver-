from django.shortcuts import render
from .api import check_air

# Create your views here.
def index(request):
    check_air()
    
    return render(request, 'MeetBook/main.html')