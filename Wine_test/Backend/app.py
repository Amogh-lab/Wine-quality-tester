from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

model = joblib.load("/home/lapis/Desktop/Wine Quality Tester/Wine-quality-tester/Wine_test/Backend/wine_quality_model.pkl")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    input_features = np.array(data['features']).reshape(1, -1)
    predicted_quality = model.predict(input_features)[0]

    if predicted_quality <= 4:
        quality_range = "Low"
    elif predicted_quality >= 7:
        quality_range = "High"
    else:
        quality_range = "Mid"

    return jsonify({
        'predicted_quality': int(predicted_quality),
        'quality_range': quality_range
    })

if __name__ == '__main__':
    app.run(debug=True)
