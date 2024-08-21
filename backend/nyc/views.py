from django.http import JsonResponse
from dotenv import dotenv_values
from datetime import date
import requests

keys = dotenv_values(".env")

# Create your views here.


def daily(request, zipcode):
    headers = {
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': keys['Key-Event'],
    }
    today = date.today().strftime('%m/%d/%Y')
    url = f'https://api.nyc.gov/calendar/search?startDate={today}%2012:00%20AM&endDate={today}%2011:59%20PM&zip={zipcode}&sort=DATE'
    return JsonResponse(requests.get(url, headers=headers).json())
