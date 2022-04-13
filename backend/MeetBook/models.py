from django.db import models

# Create your models here.
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
    
class Genre(models.Model):
    genre = models.CharField(max_length=10)
    
class Book(models.Model):
    book_name = models.CharField(max_length=45)
    book_author = models.CharField(max_length=45)
    book_contents = models.TextField()
    book_publisher = models.CharField(max_length=45)
    isbn = models.CharField(max_length=45)
    book_pubdate = models.DateField()
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    loan_count = models.IntegerField()
    book_thumbnail_url = models.CharField(max_length=45)
    
class Conference(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    call_start_time = models.DateTimeField(auto_now=True)
    call_end_time = models.DateTimeField(auto_now_add=True)
    thumbnail_url = models.CharField(max_length=45)
    title = models.CharField(max_length=45)
    description = models.TextField(max_length=45)
    max_member = models.IntegerField()
    question = models.CharField(max_length=45)
    question = models.CharField(max_length=45)
    tag = models.CharField(max_length=100)
    
class Conference_history(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    conference = models.ForeignKey(Conference, on_delete=models.CASCADE)
    action = models.SmallIntegerField()
    inserted_time = models.DateTimeField(auto_now_add=True)
    
class User_conference(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    conference = models.ForeignKey(Conference, on_delete=models.CASCADE)
    authority = models.SmallIntegerField()
    
class Report(models.Model):
    report_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reporter')
    target_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='targeter')
    content = models.CharField(max_length=45)
    reported_at = models.DateTimeField(auto_now_add=True)

class Bookmark(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    conference = models.ForeignKey(Conference, on_delete=models.CASCADE)
    
class Article(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    init_date = models.DateField(auto_now=True)
    update_date = models.DateField(auto_now_add=True)
    title = models.CharField(max_length=45)
    content = models.CharField(max_length=45)
    
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    init_date = models.DateField(auto_now=True)
    update_date = models.DateField(auto_now_add=True)
    content = models.CharField(max_length=45)