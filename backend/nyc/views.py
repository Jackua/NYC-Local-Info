from django.http import JsonResponse
from helper import parse

# Create your views here.


def daily(request, zipcode):
    return JsonResponse(parse.create_json(zipcode))


def weekly(request, zipcode):
    return JsonResponse(parse.create_json(zipcode, end_date=parse.get_nextweek()))
