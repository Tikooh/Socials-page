from flask import Flask
import requests
import base64
import os

app = Flask(__name__)

CLIENT_ID = ""
CLIENT_SECRET = ""

REFRESH_TOKEN = ""

TOKEN_URL = "https://accounts.spotify.com/api/token"

access_token = None

def refresh_token(access_token):

    auth_header = base64.b64encode(f'{CLIENT_ID}:{CLIENT_SECRET}'.encode()).decode()

    data = {
        "grant_type": "refresh_token",
        "refresh_token": REFRESH_TOKEN
    }

    response = requests.post(
        TOKEN_URL,
        headers = {"Authorization": f'Basic {auth_header}'},
        data = data
    )

    if response.status_code == 200:
        new_data = response.json()
        access_token = new_data["access_token"]
        return access_token
    
    else:
        print("failed to refresh access token")



