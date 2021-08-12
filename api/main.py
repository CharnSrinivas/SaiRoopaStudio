from app import createapp

app = createapp();
@app.route('/')
def  index():
    return "<h1 style=\"text-align:center\">Unauthorized permission</h1>"