from flask import Flask, render_template, request, redirect, url_for, session
from werkzeug.utils import secure_filename
import os
from predict import predict_single_image  # your prediction function

app = Flask(__name__)
app.secret_key = 'your_secret_key'

UPLOAD_FOLDER = 'static/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        image = request.files['image']
        if image:
            filename = secure_filename(image.filename)
            image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            image.save(image_path)

            breed = predict_single_image(image_path)
            breed = breed.replace('_', ' ').title()

            
            session['breed'] = breed
            session['image_path'] = filename

            
            return redirect(url_for('index'))

   
    breed = session.pop('breed', None)
    image_path = session.pop('image_path', None)
    return render_template('index.html', breed=breed, image_path=image_path)

if __name__ == '__main__':
    app.run(debug=True)
