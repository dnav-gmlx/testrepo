import os
from flask import Flask, session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
# from flask_login import LoginManager


app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://gmlxopsadmin@gmlxopsserver01:MXlt00a1jC@gmlxopsserver01.postgres.database.azure.com/flasksql"

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = "mysecretkey"
app.config['PO_UPLOAD_EXTENSIONS'] = ['pdf', 'png', 'jpeg', 'jpg']
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

# db = SQLAlchemy(app)
# db.create_all()
# Migrate(app, db)


from main.blueprints.scorecard.views import scorecard

app.register_blueprint(scorecard, url_prefix="/scorecard")