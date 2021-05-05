from flask import Flask, request, redirect, render_template

app = Flask(__name__, template_folder="templates",)
users = [

]
# title = "index page"


class User():
    def __init__(self, _name):
        self.ad = _name


@app.route("/")
def index():
    # if request.method == 'POST':

    #     name = request.form["ad"]
    #     surname = request.form["soyad"]
    #     city = request.form['city']
    #     return render_template('index.html', dataName=name, dataSurname=surname, dataCity=city)
    return render_template("index.html", istifadeciler=user)


@app.route("/add", methods=['GET', 'POST'])
def index():
    global id

    if request.method == 'POST':
        user = User(id, request.form["ad"])
        users.append(user)
        id += 1
        return redirect("/")
    return render_template('add.html')
# @app.route("/html")
# def html():
#     return """
# <h1 style="color:red"> title </h1>
#     """


# @app.route("/<name>")
# def dinamicData(name):
#     return name


# @app.errorhandler(404)
# def page_not_found(e):
#     # note that we set the 404 status explicitly
#     return render_template('404.html'), 404


if __name__ == "__main__":
    app.run(debug=True)
