# predict.py

import os
import pandas as pd
import numpy as np
import tensorflow as tf
import tensorflow_hub as hub
from keras.utils import custom_object_scope

IMG_SIZE = 224

def process_image(image_path):
    image = tf.io.read_file(image_path)
    image = tf.image.decode_jpeg(image, channels=3)
    image = tf.image.convert_image_dtype(image, tf.float32)
    image = tf.image.resize(image, size=[IMG_SIZE, IMG_SIZE])
    return image

label = pd.read_csv("./datas/labels.csv")
labels = label["breed"].to_numpy()
unique_breeds = np.unique(labels)

def get_pred_label(prediction_probabilities):
    return unique_breeds[np.argmax(prediction_probabilities)]

os.environ['TFHUB_CACHE_DIR'] = './mobilenet'
custom_objects = {"KerasLayer": hub.KerasLayer}
with custom_object_scope(custom_objects):
    model = tf.keras.models.load_model('./assets/model/dog_breed.h5')

def predict_single_image(image_path):
    img = process_image(image_path)
    img = tf.expand_dims(img, 0)
    preds = model.predict(img)
    breed = get_pred_label(preds[0])
    return breed
