from django.shortcuts import HttpResponse, render

def home(request):
    return render(request, 'home.html')

def resume(request):
    return render(request, 'layout.html')

def about(request):
    return render(request, 'about.html')

def projects(request):
    return render(request, 'projects.html')
