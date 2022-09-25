from flask import Flask, render_template, request
from videoediting import cutting
app = Flask(__name__)

@app.route("/")
def editor():
    return render_template('index.html')

@app.route("/cut", methods=['POST'])
def cut():
    if request.method == 'POST':
        starttime = request.form.get('starttime')
        finishtime = request.form.get('finishtime')
        print(starttime, finishtime)
        cutting(float(starttime), float(finishtime))
    return render_template('cut.html')


if __name__ == "__main__":
    app.run(debug=True)