
from collections import OrderedDict
from django.shortcuts import render
from serialisers import StaffSerializers
from staff_profile.models import Staff
from rest_framework.decorators import api_view
from rest_framework.response import Response
from serialisers import *
from itertools import chain

# Create your views here.


@api_view(['GET'])
def home(request):
    staff = Staff.objects.all()
    user = User.objects.all()
    staff_serializer = StaffSerializers(staff, many=True)
    context = {'staff': staff_serializer.data}
    return Response(context)

@api_view(['GET'])
def contact(request):
    contact = Contact.objects.all()
    contact_serializer = ContactSerializers(contact, many=True)
    return Response(contact_serializer.data)

@api_view(['GET'])
def about(request):
    return render(request, 'about.html')
