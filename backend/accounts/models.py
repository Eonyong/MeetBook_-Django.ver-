from django.db import models

class User(models.Model):
    name = models.CharField(max_length=45)
    password = models.CharField(max_length=12)
    nickname = models.CharField(max_length=45)
    email = models.EmailField()
    gender = models.IntegerField()
    age = models.IntegerField()
    profile_image = models.CharField(max_length=45)
    profile_description = models.TextField()
    host_point = models.IntegerField()
    guest_point = models.IntegerField()
    
    def __str__(self):
        return self.name