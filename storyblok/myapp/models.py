from django.db import models

# Create your models here.
class storyblock(models.Model):
    title = models.CharField(max_length=200)
    post = models.TextField()

    def __str__(self):
        return self.title
