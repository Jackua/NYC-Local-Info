from dotenv import dotenv_values
from datetime import date, datetime
import requests

keys = dotenv_values(
    r'C:\Users\Jacky\Documents\Code\Full Stack\nyc-local-info\backend\.env')
today = date.today().strftime('%m/%d/%Y')
headers = {
    'Cache-Control': 'no-cache'
}
datetime_format = '%Y-%m-%dT%H:%M:%S.000-04:00'
today_id_format = '%Y%m%d'
nextweek = date.today().replace(day=date.today().day + 7).strftime('%m/%d/%Y')


def create_json(zipcode, start_date=today, end_date=today):
    event_dict = parse_event(zipcode, start_date, end_date)
    public_dict = parse_public(start_date, end_date)

    for dt in public_dict:
        public_dict[dt]['event'] = event_dict[dt]
    print(public_dict)

    return public_dict


def parse_event(zipcode, start_date=today, end_date=today):
    headers['Ocp-Apim-Subscription-Key'] = keys['Key-Event']
    url = f'https://api.nyc.gov/calendar/search?startDate={start_date}%2012:00%20AM&endDate={end_date}%2011:59%20PM&zip={zipcode}&sort=DATE'

    event_items = requests.get(url, headers=headers).json()['items']
    events_dict = {}

    for item in event_items:
        dt = reformat_datetime(item['startDate'], datetime_format)
        if dt not in events_dict:
            events_dict[dt] = []
        events_dict[dt].append(
            {'name': item['name'], 'address': item['address'], 'time': item['timePart']})

    return events_dict


def parse_public(start_date=today, end_date=today):
    headers['Ocp-Apim-Subscription-Key'] = keys['Key-311']
    url = f'https://api.nyc.gov/public/api/GetCalendar?fromdate={start_date}&todate={end_date}'

    public_days = requests.get(url, headers=headers).json()['days']
    public_dict = {}
    for day in public_days:
        dt = reformat_datetime(day['today_id'], today_id_format)
        if dt not in public_dict:
            public_dict[dt] = {}
        for item in day['items']:
            public_dict[dt][item['type']] = item['details']

    return public_dict


def get_nextweek():
    return date.today().replace(day=date.today().day + 6).strftime('%m/%d/%Y')


def reformat_datetime(old_datetime, format):
    return datetime.strptime(old_datetime, format).date().strftime('%m/%d/%Y')


print(keys['Key-Event'])
