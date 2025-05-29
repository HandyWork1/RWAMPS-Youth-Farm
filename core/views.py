from django.shortcuts import redirect,render, get_object_or_404
from django.contrib import messages
from .models import Service  # Import the Service model
from .models import Subscriber  # Import the Subscriber model
from .models import ContactMessage  # Import the Contact model

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
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        subject = request.POST.get('subject', 'Message from website')
        message = request.POST.get('message')

        if name and email and message:
            ContactMessage.objects.create(
                name=name,
                email=email,
                phone=phone,
                subject=subject,
                message=message
            )
            messages.success(request, 'Your message has been sent successfully!')
            return redirect('core:contact')
        else:
            messages.error(request, 'Please fill in all required fields.')

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
