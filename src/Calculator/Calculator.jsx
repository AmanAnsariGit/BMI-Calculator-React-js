import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const h = parseInt(height);
    const w = parseInt(weight);

    if (isNaN(h) || h <= 0) {
      setError('❌ Please enter a valid height in CM.');
      setBmi('');
      return;
    }

    if (isNaN(w) || w <= 0) {
      setError('❌ Please enter a valid weight in KG.');
      setBmi('');
      return;
    }

    const calculatedBmi = (w / ((h * h) / 10000)).toFixed(2);
    setBmi(`✅ Your BMI is: ${calculatedBmi}`);
    setError('');
  };

  return (
    <div className="maindiv">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="height">Height in CM</label>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="weight">Weight in KG</label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </p>
          <button type="submit">Calculate</button>

          <div className="result-box">
            <h2>Result :</h2>
            <div id="results">{error ? error : <strong>{bmi}</strong>}</div>
          </div>

          <div id="weight-guide">
            <h4>BMI Weight Guide</h4>
            <p>Underweight = Less than 18.6</p>
            <p>Normal Range = 18.6 to 24.9</p>
            <p>Overweight = Greater than 24.9</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BMICalculator;
