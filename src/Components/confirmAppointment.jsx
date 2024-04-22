import React, { useState } from "react";

const ConfirmAppointment = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: "Aarav Patel", date: "2024-04-25", time: "10:00 AM" },
    { id: 2, patient: "Diya Singh", date: "2024-04-25", time: "11:00 AM" },
    { id: 3, patient: "Kavya Reddy", date: "2024-04-26", time: "09:00 AM" },
  ]);

  const handleConfirm = (id) => {
    // Logic to confirm appointment
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(updatedAppointments);
  };

  return (
    <div className="container">
      <h2>Confirm Appointment Requests</h2>
      <div className="mt-4">
        <ul className="list-group">
          {appointments.map((appointment) => (
            <li
              key={appointment.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{appointment.patient}</strong>
                <p>Date: {appointment.date}</p>
                <p>Time: {appointment.time}</p>
              </div>
              <button
                className="btn btn-success"
                onClick={() => handleConfirm(appointment.id)}
              >
                Confirm
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ConfirmAppointment;
