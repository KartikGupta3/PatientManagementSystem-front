import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientDetail = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showPendingConfirmations, setShowPendingConfirmations] =
    useState(false);

  const navigate = useNavigate();

  const patient = {
    name: "Akash Sharma",
    email: "akash.sharma@example.com",
    doctor: "Dr. Priya Patel",
    treatment: "Medication A",
    completion: 80,
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    // Hide pending confirmations when date changes
    setShowPendingConfirmations(false);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    // Hide pending confirmations when time changes
    setShowPendingConfirmations(false);
  };

  const handleBookAppointment = () => {
    // Show pending confirmations after booking appointment
    setShowPendingConfirmations(true);
  };

  return (
    <div className="vh-100 bg-light">
      <div className="p-2 d-flex justify-content-center shadow">
        <h4>Patient Management System</h4>
      </div>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="mt-5">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">{patient.name}</h5>
              <p className="card-text">Doctor Monitoring: {patient.doctor}</p>
              <p className="card-text">Treatment: {patient.treatment}</p>
              <p className="card-text">
                Treatment Completion: {patient.completion}%
              </p>
              <div className="mt-3">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="form-control mb-2"
                />
                <input
                  type="time"
                  value={selectedTime}
                  onChange={handleTimeChange}
                  className="form-control mb-2"
                />
                <button
                  className="btn btn-success me-2"
                  onClick={handleBookAppointment}
                >
                  Book Appointment
                </button>
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
          {showPendingConfirmations && (
            <div className="mt-5">
              <h4>
                Pending Confirmations for {selectedDate} at {selectedTime}
              </h4>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Time: {selectedTime}
                  <span className="badge bg-warning">Pending</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientDetail;
