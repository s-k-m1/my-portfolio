# pages/models.py
from django.db import models

class Contact(models.Model):  # <-- this name matches your import
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)  # unique email
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"