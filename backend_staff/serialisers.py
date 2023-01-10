from rest_framework import serializers
from staff_profile.models import *
from django.contrib.auth.models import User



class StaffSerializers(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = '__all__'
        depth = 1

class WorkExperienceSerializers(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        fields = '__all__'
        depth = 1

class EducationSerializers(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'
        depth = 1

class PublicationSerializers(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = '__all__'
        # depth = 1

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username', 'first_name', 'last_name', 'email']

class ContactSerializers(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

    