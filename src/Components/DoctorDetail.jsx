import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const DoctorDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const patients = [
    { id: 1, name: "Aarav Patel", treatment: "Medication A" },
    { id: 2, name: "Diya Singh", treatment: "Medication B" },
    { id: 3, name: "Kavya Reddy", treatment: "Medication C" },
  ];

  const handleTreatmentChange = (patientName) => {
    navigate(`/change-treatment`, {
      state: { name: patientName, doct: state.name },
    });
  };

  return (
    <div className="vh-100 d-flex flex-column bg-light">
      <div className="p-2 d-flex justify-content-center shadow">
        <h4>Patient Management System</h4>
      </div>
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="mt-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Doctor: {state.name}</h3>
                <h4 className="card-subtitle mb-2 text-muted">
                  No of patients handling: {patients.length}
                </h4>
                <div className="mt-3">
                  <h5 className="mb-3">Patients List:</h5>
                  <ul className="list-group">
                    {patients.map((patient) => (
                      <li
                        key={patient.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        {patient.name}
                        <button
                          onClick={() => handleTreatmentChange(patient.name)}
                          className="btn btn-sm btn-info"
                        >
                          Change Treatment
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3">
                  <button className="btn btn-primary me-2">Edit</button>
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
