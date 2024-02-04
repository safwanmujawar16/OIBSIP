from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

# Create your views here.
def HomePage(request):
    return render(request,'Home.html')

def SignupPage(request):
    if request.method=='POST':
        uname=request.POST.get('Username')
        email=request.POST.get('Email')
        pass1=request.POST.get('password')
        pass2=request.POST.get('confirm')
        if pass1!=pass2:
            return redirect('Password are not same!')
        else:
            my_user=User.objects.create_user(uname,email,pass1)
            my_user.save()
            return redirect('login')
        
    return render(request,'signup.html')

def LoginPage(request):
    if request.method=='POST':
        username=request.POST.get('Username')
        pass1=request.POST.get('Password')
        user=authenticate(request,username=username,password=pass1)
        if user is not None:
            login(request,user)
            return redirect('home')
        else:
            return HttpResponse('Username or Password incorrect')
    return render(request,'login.html')