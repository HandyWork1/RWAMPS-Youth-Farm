from django.shortcuts import redirect,render, get_object_or_404
from django.contrib import messages
from .models import Service  # Import the Service model
from .models import Subscriber  # Import the Subscriber model

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

def subscribe(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        if email and not Subscriber.objects.filter(email=email).exists():
            Subscriber.objects.create(email=email)
            messages.success(request, "Successfully subscribed to our newsletter!")
        else:
            messages.warning(request, "You're already subscribed.")
    return redirect(request.META.get('HTTP_REFERER', 'core:home'))
