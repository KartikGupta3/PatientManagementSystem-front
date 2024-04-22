import React, { useState } from "react";
import { Link } from "react-router-dom";

const ManagePatients = () => {
  // Sample list of Indian patient names
  const [patients, setPatients] = useState([
    { id: 1, name: "Aarav Patel" },
    { id: 2, name: "Diya Singh" },
    { id: 3, name: "Kavya Reddy" },
    { id: 4, name: "Arjun Kumar" },
    { id: 5, name: "Zoya Sharma" },
    { id: 6, name: "Vivaan Gupta" },
    { id: 7, name: "Anaya Desai" },
    { id: 8, name: "Vihaan Malhotra" },
    { id: 9, name: "Saisha Choudhury" },
    { id: 10, name: "Ishaan Khanna" },
  ]);

  // Function to handle deletion of a patient
  const handleDelete = (id) => {
    // Filter out the patient with the given id
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    // Update the state with the filtered patients
    setPatients(updatedPatients);
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Manage Patients</h2>
      <div className="list-group d-flex flex-column align-items-center">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="list-group-item d-flex justify-content-between align-items-center w-75 mb-2"
          >
            <span>{patient.name}</span>
            <div>
              <Link
                to={`/edit_patient/${patient.id}`}
                className="btn btn-info me-2"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(patient.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagePatients;
