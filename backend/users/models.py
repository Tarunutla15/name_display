from django.db import models

# Create your models here.
class Register(models.Model):
    name = models.CharField(max_length=15,default=None)
    email = models.EmailField(unique=True,default=None)