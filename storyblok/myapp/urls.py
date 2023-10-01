from . import views
from django.urls import path

urlpatterns = [
    path('content/', views.content, name='content')
]