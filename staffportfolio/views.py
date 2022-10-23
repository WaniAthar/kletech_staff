
from django.shortcuts import render
from staff_profile.models import Staff

# Create your views here.

def home(request):
    staff = Staff.objects.all()
    context = {'staff': staff}
    return render(request, 'home.html', context)

def contact(request):
    return render(request, 'contact.html')

def about(request):
    return render(request, 'about.html')
