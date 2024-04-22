import React, { useState } from "react";
import { Link } from "react-router-dom";

const ManageDoctors = () => {
  // Sample list of Indian doctor names
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Rajesh Gupta" },
    { id: 2, name: "Dr. Nidhi Sharma" },
    { id: 3, name: "Dr. Ankit Patel" },
    { id: 4, name: "Dr. Pooja Singh" },
  ]);

  const handleDelete = (id) => {
    const updatedDoctors = doctors.filter((doctor) => doctor.id !== id);
    setDoctors(updatedDoctors);
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Manage Doctors</h2>
      <div className="list-group d-flex flex-column align-items-center">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="list-group-item d-flex justify-content-between align-items-center w-75 mb-2">
            <span>{doctor.name}</span>
            <div>
              <Link to={`/edit_doctor/${doctor.id}`} className="btn btn-info me-2">Edit</Link>
              <button onClick={() => handleDelete(doctor.id)} className="btn btn-danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageDoctors;
