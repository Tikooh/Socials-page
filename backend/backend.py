from flask import Flask, jsonify, request
from dotenv import load_dotenv
from flask_cors import CORS
import requests
import base64
import os
import json

app = Flask(__name__)
CORS(app)

load_dotenv()

CLIENT_ID = os.getenv("API_KEY")
CLIENT_SECRET = os.getenv("API_SECRET")

REFRESH_TOKEN = os.getenv("REFRESH_TOKEN")

TOKEN_URL = "https://accounts.spotify.com/api/token"

access_token = None

@app.route("/refresh_token", methods=["POST"])
def refresh_token():

    global access_token

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

        return jsonify({"access_token": access_token})
    
    else:
        print("failed to refresh access token")

def read_json_file():
    with open("/home/george/Socials-page/socials-page/src/data/visitorSlimes.json", 'r') as file:
        contents = json.load(file)
        return contents

@app.route("/slimes", methods=["GET"])
def get_slimes():
    return jsonify(read_json_file())

@app.route("/slimes", methods=["POST"])
def post_slimes():
    new_slime = request.json

    data = read_json_file()

    data["visitor_slimes"].append(new_slime)

    with open("/home/george/Socials-page/socials-page/src/data/visitorSlimes.json", 'w') as file:
        json.dump(data, file, indent=4)

    return jsonify("successfully added a slime")


@app.route("/lenSlimes", methods=["GET"])
def get_unique_entries():
    data = read_json_file()

    count = len(data["visitor_slimes"])

    return jsonify({"count": count})

if __name__ == "__main__":
    app.run(debug=True)