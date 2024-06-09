from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Persona(models.Model):
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    edad = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])