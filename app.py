from flask import *
import db

app = Flask(__name__)

@app.before_first_request
def db_setup():
  db.setup()

@app.route('/', methods=["GET", "POST"])
@app.route('/main')
def main_page():
  if request.method == "POST":
    form = request.form
    name = form['name']
    message = form['message']
    
    # Uncomment for the innerHTML example.
    db.add_message(name, message)

    return render_template('quill.html', data=message)
  return render_template('quill.html', data=None)

@app.route("/api/messages", methods=["GET"])
def get_messages():
  msgData = { 'data': [] }

  data = db.get_messages()

  for datum in data:
    current = {
      "id": datum[0],
      "name": datum[1],
      "msg": datum[2]
    }
    msgData['data'].append(current)

  return jsonify(msgData)

@app.route("/display", methods=["GET", "POST"])
def display():
  if request.method == "POST":
    form = request.form
    id = form.get('hidden', '')
    newMsg = form.get('update', '')
    db.update_messages(newMsg, id)

  quill_data = []

  data = db.get_messages()

  for datum in data:
    current = {
      "id": datum[0],
      "name": datum[1],
      "msg": datum[2]
    }
    quill_data.append(current)

  return render_template("display.html", data=quill_data)