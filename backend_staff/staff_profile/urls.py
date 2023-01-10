
from django.urls import path
import staff_profile.views as views

urlpatterns = [
    path('profile/<str:slug>', views.profile, name='profile'),
]
