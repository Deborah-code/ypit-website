#!python
from django.shortcuts import render, redirect
import storyblok
import requests
from django.http import JsonResponse
from .models import storyblock

# Create your views here.
def content(request):
    api_key = 'S8qiBzcmgxZqx0bbWtZ4twtt'
    space_id = '#249940'
    content_type = 'Default Page'
    
    url = f'https://api.storyblok.com/v1/cdn/stories?token={api_key}&space_id={space_id}&starts_with={content_type}'
    # url = f'https://api.storyblok.com/v2/cdn/stories'
    querystring = {"token" : "S8qiBzcmgxZqx0bbWtZ4twtt"}
    payload = ""
    headers = {}

    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)
    
    get = response.json()
    Title = get['stories'][4]['content']['body'][0]['headline']
    Post = get['stories'][4]['content']['body'][0]['text']
    blogpost = storyblock.objects.filter(title=Title, post=Post)
    if blogpost.exists():
        print(f'{Title} : {Post}')
        return redirect('https://app.storyblok.com/#/me/spaces/249940/stories/0/0/368620041')
    else:
        blog = storyblock.objects.create(title=Title, post=Post)
        blog.save()
        return redirect('https://app.storyblok.com/#/me/spaces/249940/stories/0/0/368620041')
    