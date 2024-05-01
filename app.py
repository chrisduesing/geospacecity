# app.py
from flask import Flask, render_template

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

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

@app.route('/action/skew/new', methods=['GET'])
def new_action_skew():
    return render_template('actions/skew.html')

@app.route('/action/scaleX/new', methods=['GET'])
def new_action_scaleX():
    return render_template('actions/scaleX.html')


@app.route('/action/scaleY/new', methods=['GET'])
def new_action_scaleY():
    return render_template('actions/scaleY.html')

@app.route('/action/blink/new', methods=['GET'])
def new_action_blink():
    return render_template('actions/blink.html')

@app.route('/action/marquee/new', methods=['GET'])
def new_action_marquee():
    return render_template('actions/marquee.html')

if __name__ == '__main__':
    #app.run(debug=True, port=5555)
    app.run(debug=False, port=80)