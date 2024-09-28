import os
from flask import Flask, render_template, request, redirect, url_for
import sqlite3

# Get the directory of the current file (app.py)
current_dir = os.path.dirname(os.path.abspath(__file__))

# Initialize Flask app with custom template folder
app = Flask(__name__, template_folder=current_dir)

# Database setup
def init_db():
    with app.app_context():
        db = get_db()
        db.execute('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)')
        db.commit()

def get_db():
    db = sqlite3.connect('users.db')
    db.row_factory = sqlite3.Row
    return db

@app.route('/')
def index():
    return redirect(url_for('register'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # Handle form submission
        # For now, let's just print the form data
        print(request.form)
        # You would typically process the form data here
        # Then redirect to a success page or login page
        return redirect(url_for('register_success'))
    # If it's a GET request, just render the form
    return render_template('register.html')

@app.route('/register_success')
def register_success():
    return "Registration successful!"

if __name__ == '__main__':
    init_db()
    app.run(debug=True)