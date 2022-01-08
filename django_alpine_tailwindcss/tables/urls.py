from django.urls import path
    
from .views import CountriesListView, IndexView

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('countries', CountriesListView.as_view(), name='countries'),
]
