# NYC Local Info App

This GitHub repository contains a simple fullstack application that utilizes official APIs from the City of New York to display local information and events based on the ZIP code provided by the user. The app is built with Django on the backend and React on the frontend.

## Environment Variables

This project requires several environment variables to be set up for proper functionality, including API keys for accessing New York City data and the `SECRET_KEY` for Django.

To run this project locally, you'll need to create a `.env` file in the `backend` directory and add the following environment variables:

- `DJANGO_SECRET_KEY=your_django_secret_key_here`
- `NYC_EVENTS_API_KEY=your_nyc_events_api_key_here`
- `NYC_311_API_KEY=your_nyc_311_api_key_here`

## Installation & Setup

Clone the repository:
1. git clone https://github.com/jackua/nyc-street-info-app.git
2. cd nyc-street-info-app


## Backend Setup
1. cd backend
2. py -m venv .venv
3. .\\.venv\Scripts\activate
4. pip install -r requirements.txt
5. python manage.py migrate
6. python manage.py runserver

## Frontend Setup
1. cd frontend
2. npm install
3. npm start

## Usage
Once both the backend and frontend servers are running, open your browser and navigate to http://localhost:3000.
Enter a valid NYC ZIP code and select either Daily or Weekly then click get info.

## Attribution

This project uses data provided by the City of New York through its official APIs:

- [NYC Events Calendar API](https://api-portal.nyc.gov/api-details#api=event-calendar)
- [NYC 311 Public API](https://api-portal.nyc.gov/api-details#api=nyc-311-public-api)

## License
This project is licensed under the MIT License. See the LICENSE file for details.
