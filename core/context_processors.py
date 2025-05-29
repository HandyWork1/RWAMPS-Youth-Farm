from .models import Service

def services_processor(request):
    """
    Context processor to add all services to the context.
    This allows us to access services in templates without querying the database multiple times.
    """
    all_services = Service.objects.all()
    return {'services': all_services}