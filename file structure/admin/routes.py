from app import app


@app.route("/admin")
def admin_index():
    return "admin page"
