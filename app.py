from flask import *
from html_sanitizer import *
import db

app = Flask(__name__)

# I learned how to update these settings from the following website:
# https://stackoverflow.com/questions/55283447/python-html-sanitizer-allow-img-tag

# For more info on the sanitizer, go to this website:
# https://pypi.org/project/html-sanitizer/

# Retrieve the default sanitizer settings
my_settings = dict(sanitizer.DEFAULT_SETTINGS)

# Add the tags you are interested in allowing.
my_tags = {'h4', 'h5', 'h6', 'u', 's', 'blockquote', 'pre', 'span', 'img'}
my_settings['tags'].update(my_tags)

# Add the allowed attributes for each tag.
my_attributes = {
  'p': ('class', 'style',),
  'span': ('class', 'style',),
  'pre': ('class', 'spellcheck',),
  'img': ('src',),
  # 'iframe': ('class', 'frameborder', 'allowfullscreen', 'src'),
}
my_settings['attributes'].update(my_attributes)

# Since img is an empty tag, as in it doesn't have a closing tag,
# you must add it to the 'empty' set. Similarly, the sanitizer combines
# sibling tags of the same attribute, which may cause problem for certain
# tags, such as span, so you have to tell the sanitizer to separate span
# tags.
my_settings['empty'].add('img')
my_settings['separate'].add('span')

# Create the sanitizer with our custom settings.
sanitizer = Sanitizer(my_settings)

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

    # Sanitize the message
    message = sanitizer.sanitize(message)
    print(message)
    
    # Uncomment for the innerHTML example.
    # db.add_message(name, message)

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