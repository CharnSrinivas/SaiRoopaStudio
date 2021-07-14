from flask import Flask
import smtplib



  
app = Flask(__name__)
  
@app.route("/")
def index():
        return "<h1>Welcome to Flask , Hosing form Heroku</h1>"

@app.route('/Home')
@app.route('/home')
def home():
    return "<h1> this is Home Page 😃 😁 😁 😁 <h1>"