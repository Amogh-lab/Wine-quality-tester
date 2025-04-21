# Wine Quality Prediction

A web-based Wine Quality Prediction tool that allows users to input physicochemical properties of wine and receive a predicted quality score based on a trained machine learning model.

## Tech Stack

- **Frontend**: React.js  
- **Backend**: Python Flask  
- **Machine Learning**: Scikit-learn  
- **Styling**: Custom CSS  

## Dependencies

### Frontend

```bash
cd Wine_test/Frontend
npm install
```
### Backend

```bash
cd Wine_test/Backend
pip install -r requirements.txt
```
### Dependencies for Backend
- Flask
- flask-cors
- scikit-learn
- pandas
- joblib

### Dependencies for Frontend
- Axios

### 1. Start Backend

```bash
cd Wine_test/Backend
python app.py
```

### 2.Start Frontend
-Be sure to run this command inside Frontend folder before running the dev
```bash
npm install
```
- Starting Frontend 

```bash
cd Wine_test/Frontend
npm run dev
```

## Features
- User-friendly form to enter wine properties
- Real-time prediction using ML model(RandomForest)
- Clean and aesthetic UI layout
- Quality range indicator (Low / Medium / High)

