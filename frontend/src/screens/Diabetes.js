import React, { useState } from "react";
import axios from "axios";
import "./sep.css";

function Diabetes() {
  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
    SkinThickness: "1",
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/predict_diabetes", formData)
      .then((response) => {
        setPrediction(response.data.predicted_diabetes);
      })
      .catch((error) => {
        console.error("There was an error making the request!", error);
      });
  };

  return (
    <div className="mx-auto text-center">
      <h1>Diabetes Prediction</h1>
      <form onSubmit={handleSubmit} className="diabetes-form">
        {Object.keys(formData).map(
          (key) =>
            key !== "SkinThickness" && ( // Exclude SkinThickness from inputs
              <div key={key} className="form-group">
                <label className="form-label">
                  {key}:
                  <input
                    className="form-input"
                    type="number"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            )
        )}
        <button type="submit" className="submit-button">
          Predict
        </button>
      </form>

      <div>
        <p>
          {prediction == 1 ? "Positive for Diabetes" : "Negative for Diabetes"}
        </p>
      </div>
    </div>
  );
}

export default Diabetes;
