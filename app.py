from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/shop')
def shop():
    return render_template('shop.html')

@app.route('/event')
def discografia():
    return render_template('discografia.html')

@app.route('/')
def concierto():
    return render_template('concierto.html')

if __name__ == '__main__':
    app.run(debug=True)