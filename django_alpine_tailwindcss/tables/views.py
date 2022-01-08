from django.views.generic.list import ListView
from django.views.generic import TemplateView


class CountriesListView(ListView):
    template_name = 'countries.html'


class IndexView(TemplateView):
    template_name = 'index.html'
