from django.db import models


class Country(models.Model):
    title = models.CharField(max_length=50, unique=True)
    capital = models.CharField(max_length=50, unique=True)
    population = models.IntegerField()

    class Meta:
        verbose_name_plural = 'countries'

    def __str__(self):
        return self.title
