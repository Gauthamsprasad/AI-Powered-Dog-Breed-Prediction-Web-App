# 🐶 AI-Powered Dog Breed Prediction Web App

A Flask web application that uses a deep learning model to predict a dog's breed from an uploaded image. The app is built with Python, TensorFlow, Pandas, and Flask.

---


## ⚙️ Setup Instructions

### 1. 📁 Create and Activate Virtual Environment

```bash
# Navigate to the project folder
cd path\to\your\project

# Create virtual environment
python -m venv venv

# Activate it:
# 🪟 Windows CMD
venv\Scripts\activate

# 💠 Windows PowerShell
.\venv\Scripts\Activate.ps1

# 🍎 macOS / 🐧 Linux
source venv/bin/activate
```

### 2. 📦 Install dependencies

```bash

pip install -r requirements.txt
```

---

## 3. 🚀 Running the App

```bash
# Set FLASK_APP depending on your OS

# 🪟 Windows CMD
set FLASK_APP=app.py

# 💠 Windows PowerShell
$env:FLASK_APP = "app.py"

# 🍎 macOS / 🐧 Linux
export FLASK_APP=app.py

# ✅ Start Flask server
flask run
```

---

## 🧠 Features

- Upload a dog image
- AI model predicts the breed
- Dark mode / Light mode toggle
- Responsive UI with Bootstrap
- Clean image preview and prediction

---

## 🤖 Tech Stack

- Python
- Flask
- TensorFlow
- TensorFlow Hub
- Pandas
- HTML/CSS/JS (Bootstrap)
