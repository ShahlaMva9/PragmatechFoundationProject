from flask_wtf import FlaskForm
from wtforms import StringField,SubmitField


class ExperienceForm(FlaskForm):
    job_name=StringField("job_name")
    job_company=StringField("job_company")
    job_date=StringField("job_date")
    job_content=StringField("job_content")
    submit=SubmitField()