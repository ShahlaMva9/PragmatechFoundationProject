from app import db


class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    contact = db.Column(db.String(50))
    contact_info = db.Column(db.String(50))
    contact_photo = db.Column(db.String(50))
