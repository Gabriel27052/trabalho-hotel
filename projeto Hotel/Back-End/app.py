from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return"The World Looks RED!"

app.run(debug=True)