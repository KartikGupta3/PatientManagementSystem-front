import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ChangeTreatment = () => {
  const { state } = useLocation();
  const [existingTreatment, setExistingTreatment] = useState("");
  const [newTreatment, setNewTreatment] = useState("");
  const navigate = useNavigate();

  const medicationOptions = [
    "Paracetamol",
    "Aspirin",
    "Ibuprofen",
    "Omeprazole",
    "Metformin",
  ];

  const handleSave = () => {
    console.log(`Existing Treatment: ${existingTreatment}`);
    console.log(`New Treatment: ${newTreatment}`);
    navigate("/doctor_detail", { state: { name: state.doct } });
  };

  return (
    <div className="container">
      <h2>Change Treatment</h2>
      <h4>{state.name}</h4>
      <div className="mb-3">
        <label htmlFor="existingTreatment" className="form-label">
          Existing Treatment:
        </label>
        <select
          className="form-select"
          id="existingTreatment"
          value={existingTreatment}
          onChange={(e) => setExistingTreatment(e.target.value)}
        >
          <option value="">Select existing treatment</option>
          {medicationOptions.map((medication, index) => (
            <option key={index} value={medication}>
              {medication}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="newTreatment" className="form-label">
          New Treatment:
        </label>
        <textarea
          className="form-control"
          id="newTreatment"
          rows="5"
          value={newTreatment}
          onChange={(e) => setNewTreatment(e.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default ChangeTreatment;
