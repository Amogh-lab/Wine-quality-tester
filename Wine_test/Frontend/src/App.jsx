import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fixedAcidity: '',
    volatileAcidity: '',
    citricAcid: '',
    residualSugar: '',
    chlorides: '',
    freeSulfurDioxide: '',
    totalSulfurDioxide: '',
    density: '',
    pH: '',
    sulphates: '',
    alcohol: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [qualityRange, setQualityRange] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/predict', {
        features: Object.values(formData).map(Number)
      });

      setPrediction(response.data.predicted_quality);
      setQualityRange(response.data.quality_range);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  return (
<div className="Screen">
<div className="info-section">
  <h2 className="info-title">Know Your Wine</h2>
  <p className="info-desc">
    Ever wondered how good your wine really is? Enter a few details like acidity, sugar, and alcohol level — and let our tool predict its quality. Whether you're a curious wine lover or a winemaker, this tool helps you understand your wine better in seconds.
  </p>
</div>
  <div className="app">
    <div className="container">
      <h1 className="title">Wine Quality Prediction</h1>
      <form className="form" onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key} className="form-group">
            <label className="label">
              {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
            </label>
            <input
              type="number"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              step="any"
              required
              className="input"
            />
          </div>
        ))}
        <button type="submit" className="btn">Predict</button>
      </form>

      {prediction !== null && (
        <div className="result">
          <h3>Predicted Quality: <span>{prediction}</span></h3>
          <h4>
            Quality Range: <span className={`range ${qualityRange.toLowerCase()}`}>{qualityRange}</span>
          </h4>
        </div>
      )}
    </div>
  </div>
</div>

  );
}

export default App;
