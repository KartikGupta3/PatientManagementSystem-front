import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [recoveryPercentage, setRecoveryPercentage] = useState(0);

  useEffect(() => {
    // Here, you can fetch appointments data from an API or local storage
    const mockAppointments = [
      { id: 1, date: "2023-05-01", time: "10:00", reason: "Routine checkup" },
      { id: 2, date: "2023-05-15", time: "14:30", reason: "Follow-up visit" },
    ];
    setAppointments(mockAppointments);

    // Set a mock recovery percentage value
    setRecoveryPercentage(75);
  }, []);

  return (
    <div className="dashboard">
      <h2>Patient Dashboard</h2>
      <div className="dashboard-content">
        <div className="appointments">
          <h3>Upcoming Appointments</h3>
          <ul>
            {appointments.map((appointment) => (
              <li key={appointment.id}>
                <p>
                  {appointment.date} - {appointment.time} ({appointment.reason})
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="recovery-stats">
          <h3>Recovery Progress</h3>
          <div className="recovery-percentage">
            <span>{recoveryPercentage}%</span>
          </div>
        </div>
        <div className="dashboard-actions">
          <Link to="/appointment">
            <button>Book an Appointment</button>
          </Link>
          <Link to="/download-report">
            <button>Download Report</button>
          </Link>
          <Link to="/treatment">
            <button>View Treatment Info</button>
          </Link>
          <Link to="/medical-history">
            <button>View Medical History</button>
          </Link>
          <Link to="/medication-tracker">
            <button>Medication Tracker</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
