from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from serialisers import StaffSerializers, WorkExperienceSerializers, EducationSerializers, PublicationSerializers, UserSerializers


@api_view(['GET'])
def profile(request, slug):
    user = User.objects.get(username=slug)
    staff = Staff.objects.get(user=user)
    workexperience = WorkExperience.objects.filter(staff=staff)
    education = Education.objects.filter(staff=staff)
    publication = Publication.objects.filter(staff=staff)
    staffserializer = StaffSerializers(staff, many=False)
    workexperienceserializer = WorkExperienceSerializers(
        workexperience, many=True)
    educationserializer = EducationSerializers(education, many=True)
    publicationserializer = PublicationSerializers(publication, many=True)
    userserializer = UserSerializers(user, many=False)
    context = {'staff': staffserializer.data, 'workexperience': workexperienceserializer.data,
               'education': educationserializer.data, 'publication': publicationserializer.data}
    return Response(context)
