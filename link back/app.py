from flask import Flask, jsonify, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(50), nullable=False)
    address2 = db.Column(db.String(50), nullable=False)
    country = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    cardType = db.Column(db.String(50), nullable=False)
    zip = db.Column(db.Integer, nullable=False)
    nameCard = db.Column(db.String(50), nullable=False)
    cardNumber = db.Column(db.Integer, nullable=False)
    Expiration = db.Column(db.String(50), nullable=False)
    CVV = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.id


@app.route("/")
def run():
    return render_template("index.html")


@app.route("/add-billing", methods=["POST"])
def billing():
    first_name = request.form["first-name"]
    last_name = request.form["last-name"]
    email = request.form["email"]
    address = request.form["address"]
    address2 = request.form["address2"]
    country = request.form["country"]
    state = request.form["state"]
    cardType = request.form["cardType"]
    nameCard = request.form["nameCard"]
    cardNumber = request.form["cardNumber"]
    Expiration = request.form["Expiration"]
    CVV = request.form["CVV"]

    user = User(first_name=first_name, last_name=last_name, email=email, address=address,
                address2=address2, country=country, state=state, zip=zip, nameCard=nameCard,
                cardNumber=cardNumber, Expiration=Expiration, CVV=CVV, cardType=cardType
                )

    try:
        db.session.add(user)
        db.session.commit()
        return redirect("/users-list")
    except:
        return "Zzibili cixdi"


@app.route("/users-list")
def show():
    users = User.query.all()
    return render_template("users-list.html", users=users)


if __name__ == "__main__":
    app.run(debug=True)
