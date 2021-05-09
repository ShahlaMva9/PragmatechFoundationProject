from app import app
from app.models import Contact,Experience
from flask import render_template, redirect, request


@app.route("/")
def main_index():
    contacts=Contact.query.all()
    experience=Experience.query.all()
    return render_template("main/index.html", contacts=contacts,experience=experience)
    
