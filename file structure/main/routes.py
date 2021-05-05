from app import app


@app.route("/")
def main_index():
    return "main page"
