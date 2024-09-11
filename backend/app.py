# app.py
from flask import Flask, render_template,jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins="*")
@app.route('/lectures')
def hello_world():
    lectures = [
        {"id": 1, "name": "Alice"},
        {"id": 2, "name": "Bob"},
        {"id": 3, "name": "Charlie"}
    ]
    return jsonify(lectures)

if __name__ == '__main__':
    app.run(debug=True)
