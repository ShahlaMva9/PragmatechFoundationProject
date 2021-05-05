from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.sqlite"
UPLOAD_FOLDER = 'app/static/uploads/'
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
db = SQLAlchemy(app)
# models
from app.models import *
# admin rouutes
from admin.routes import *
# main routes
from main.routes import *
