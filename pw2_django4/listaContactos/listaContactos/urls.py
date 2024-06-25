from django.contrib import admin
from django.urls import path
from inicio.views import myHomeView
from inicio.views import anotherView
from personas.views import personaTestView, personaCreativeView, personasAnotherCreateView, personasShowObject, personasListView, personasDeleteView

urlpatterns = [
    path('', myHomeView, name='Pagina de Inicio'),
    path('another/', anotherView),
    path('anotherAdd/', personasAnotherCreateView, name='OtrocrearPersonas'),
    path('admin/', admin.site.urls),
    path('persona/', personaTestView, name='otro'),
    path('add/', personaCreativeView, name='personaCreate'),
    path('personas/<int:myID>/', personasShowObject, name = 'browsing'),
    path('personas/', personasListView, name = 'personas_list'),
    path('personas/<int:myID>/delete/', personasDeleteView, name= 'deleting')
]
