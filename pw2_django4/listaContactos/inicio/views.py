from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def myHomeView(request, *args, **kwargs):
    myContext = {
        'myText': 'Texto de prueba CONTEXT',
        'myNumber': 12345,
        'myList':   [11, 22, 33, 44, 55 ],
    }
    return render(request, "home.html", myContext)

def anotherView(request):
    return HttpResponse('<h1>Sólo otra página</h1>')