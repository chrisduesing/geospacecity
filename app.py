# app.py
from flask import Flask, render_template

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/')
def home():
    return render_template('index.html', grid_size=144)

@app.route('/slot/load/<slot_number>', methods=['GET'])
def load_slot(slot_number):
    return render_template('slot.html', slot_number=slot_number)

@app.route('/element/new', methods=['GET'])
def new_element():
    return render_template('element.html')

@app.route('/style/new', methods=['GET'])
def new_style():
    return render_template('style.html')

@app.route('/action/new', methods=['GET'])
def new_action():
    return render_template('action.html')

if __name__ == '__main__':
    app.run(debug=True)