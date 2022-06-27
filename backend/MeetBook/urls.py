from xml.etree.ElementInclude import include
from django import views
from django.urls import path
from backend.MeetBook import viewset
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/v1/user/', include('user.urls')),
    path('user/', viewset.UserViewSet.as_view({'post':'create'})),
]
