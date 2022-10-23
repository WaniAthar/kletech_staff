
from django.urls import path
from . import views

urlpatterns = [
    path('login', views.handlelogin, name='login'),
    path('logout', views.handlelogout, name='logout'),
    path('profile', views.profile, name='profile'),
]
