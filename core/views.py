from django.shortcuts import render, get_object_or_404
from .models import Service  # Import the Service model

def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def services(request):
    all_services = Service.objects.all()
    return render(request, 'services.html', {'services': all_services})

def service_detail(request, slug):
    service = get_object_or_404(Service, slug=slug)
    return render(request, 'service_detail.html', {'service': service})

def contact(request):
    return render(request, 'contact.html')
