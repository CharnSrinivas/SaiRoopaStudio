from app import create_app
app = create_app()

@app.route('/')
def index():
    return '<h1>Hello nothig useful will available here 😁😁😅</h1>'
# if (__name__ == '__main__'):