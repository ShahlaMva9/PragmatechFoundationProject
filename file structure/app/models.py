from app import db


class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    contact = db.Column(db.String(50))
    contact_info = db.Column(db.String(50))
    contact_photo = db.Column(db.String(50))

class Experience(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    job_name = db.Column(db.String(50))
    job_company = db.Column(db.String(50))
    job_date = db.Column(db.String(50))
    job_content = db.Column(db.String(50))
    