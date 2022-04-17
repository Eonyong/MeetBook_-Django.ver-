from django.shortcuts import render

from .api import check_book
check_book()

# Create your views here.
def index(request):
    return render(request, 'MeetBook/main.html')