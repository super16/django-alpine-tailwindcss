from django.http import JsonResponse
from django.views.generic.list import ListView
from django.views.generic import TemplateView

from .models import Country


class CountriesListView(ListView):
    model = Country
    template_name = 'countries.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['object_list'] = JsonResponse(
            list(self.object_list.values()), safe=False
        ).content.decode('utf-8')
        return context


class IndexView(TemplateView):
    template_name = 'index.html'
