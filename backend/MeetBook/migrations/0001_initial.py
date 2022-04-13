# Generated by Django 4.0.4 on 2022-04-13 14:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('init_date', models.DateField(auto_now=True)),
                ('update_date', models.DateField(auto_now_add=True)),
                ('title', models.CharField(max_length=45)),
                ('content', models.CharField(max_length=45)),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('book_name', models.CharField(max_length=45)),
                ('book_author', models.CharField(max_length=45)),
                ('book_contents', models.TextField()),
                ('book_publisher', models.CharField(max_length=45)),
                ('isbn', models.CharField(max_length=45)),
                ('book_pubdate', models.DateField()),
                ('loan_count', models.IntegerField()),
                ('book_thumbnail_url', models.CharField(max_length=45)),
            ],
        ),
        migrations.CreateModel(
            name='Conference',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('call_start_time', models.DateTimeField(auto_now=True)),
                ('call_end_time', models.DateTimeField(auto_now_add=True)),
                ('thumbnail_url', models.CharField(max_length=45)),
                ('title', models.CharField(max_length=45)),
                ('description', models.TextField(max_length=45)),
                ('max_member', models.IntegerField()),
                ('question', models.CharField(max_length=45)),
                ('tag', models.CharField(max_length=100)),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MeetBook.book')),
            ],
        ),
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('genre', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=45)),
                ('password', models.CharField(max_length=12)),
                ('nickname', models.CharField(max_length=45)),
                ('email', models.EmailField(max_length=254)),
                ('gender', models.IntegerField()),
                ('age', models.IntegerField()),
                ('profile_image', models.CharField(max_length=45)),
                ('profile_description', models.TextField()),
                ('host_point', models.IntegerField()),
                ('guest_point', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='User_conference',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('authority', models.SmallIntegerField()),
                ('conference', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MeetBook.conference')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MeetBook.user')),
            ],
        ),
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(max_length=45)),
                ('reported_at', models.DateTimeField(auto_now_add=True)),
                ('report_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reporter', to='MeetBook.user')),
                ('target_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='targeter', to='MeetBook.user')),
            ],
        ),
        migrations.CreateModel(
            name='Conference_history',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action', models.SmallIntegerField()),
                ('inserted_time', models.DateTimeField(auto_now_add=True)),
                ('conference', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MeetBook.conference')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MeetBook.user')),
            ],
        ),
        migrations.AddField(
            model_name='conference',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MeetBook.user'),
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('init_date', models.DateField(auto_now=True)),
                ('update_date', models.DateField(auto_now_add=True)),
                ('content', models.CharField(max_length=45)),
                ('article', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MeetBook.article')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MeetBook.user')),
            ],
        ),
        migrations.CreateModel(
            name='Bookmark',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('conference', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MeetBook.conference')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MeetBook.user')),
            ],
        ),
        migrations.AddField(
            model_name='book',
            name='genre',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MeetBook.genre'),
        ),
        migrations.AddField(
            model_name='article',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MeetBook.user'),
        ),
    ]
