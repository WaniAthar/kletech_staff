from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate

def profile(request):
    return render(request, 'profile.html')


def handlelogin(request):
    if request.method == 'POST':
        # Get the post parameters
        username = request.POST['lusername']
        password = request.POST['lpassword']
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            return redirect('home')

def handlelogout(request):
    logout(request)
    return redirect('home')


