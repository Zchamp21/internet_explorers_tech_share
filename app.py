from flask import *

app = Flask(__name__)

@app.route('/')
@app.route('/main')
def main_page():
  return render_template('quill.html')