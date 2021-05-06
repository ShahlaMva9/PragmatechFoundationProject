from app import app
from app import db
from app.models import Contact,Experience
import os
from admin.forms import ExperienceForm
from flask import render_template, redirect, request


@app.route("/admin")
def admin_index():
    return render_template("admin/index.html")


@app.route("/admin/contact", methods=["GET", "POST"])
def admin_contact():
    contacts = Contact.query.all()
    if request.method == "POST":
        file = request.files['contact_photo']
        filename = file.filename
        file.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
        contact = Contact(
            contact=request.form["contact"],
            contact_info=request.form["contact_info"],
            contact_photo=filename
        )
        db.session.add(contact)
        db.session.commit()
        return redirect("/admin/contact")
    return render_template("admin/contact.html", contacts=contacts)
# experience


@app.route("/admin/experience", methods=["GET", "POST"])
def admin_experience():
    form = ExperienceForm()
    experience=Experience.query.all()
    if request.method=="POST" :
        experience=Experience(
            job_name=form.job_name.data,
            job_company=form.job_company.data,
            job_date=form.job_date.data,
            job_content=form.job_content.data
        )
        db.session.add(experience)
        db.session.commit()
        return redirect('/admin/experience')
    return render_template("admin/experience.html", form=form,experience=experience)
