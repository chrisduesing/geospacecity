# app.py
from flask import Flask, render_template

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/')
def home():
    return render_template('index.html', grid_size=144)

@app.route('/content/new', methods=['GET'])
def new_content():
    return render_template('content.html')

@app.route('/content/text/new', methods=['GET'])
def new_text():
    return render_template('text.html')

@app.route('/content/image/new', methods=['GET'])
def new_image():
    return render_template('image.html')

@app.route('/style/new', methods=['GET'])
def new_style():
    return render_template('style.html')

@app.route('/action/new', methods=['GET'])
def new_action():
    return render_template('action.html')

@app.route('/action/rotate/new', methods=['GET'])
def new_action_rotate():
    return render_template('actions/rotate.html')

if __name__ == '__main__':
    app.run(debug=True)