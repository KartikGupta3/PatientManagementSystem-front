import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [reason, setReason] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [department, setDepartment] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!appointmentDate || !appointmentTime || !reason || !department) {
      setFormError('All fields are required');
      return;
    }

    // Check if date and time are in the future
    const now = new Date();
    const selectedDateTime = new Date(`${appointmentDate}T${appointmentTime}`);
    if (selectedDateTime <= now) {
      setFormError('Please select a future date and time');
      return;
    }

    // Reset form error
    setFormError('');

    // Here, you can add logic to save the appointment details or make API calls
    console.log('Appointment Details:', {
      appointmentDate,
      appointmentTime,
      reason,
      doctorName,
      department,
    });

    // Show confirmation message (optional)
    alert('Appointment booked successfully!');
  };

  return (
    <div className="appointment">
      <h2>Book an Appointment</h2>
      <div className="appointment-content">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="appointmentDate">Date:</label>
            <input
              type="date"
              id="appointmentDate"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="appointmentTime">Time:</label>
            <input
              type="time"
              id="appointmentTime"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="reason">Reason:</label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
              minLength={10}
            ></textarea>
          </div>
          <div>
            <label htmlFor="doctorName">Doctor Name:</label>
            <input
              type="text"
              id="doctorName"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="department">Department:</label>
            <select
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            >
              <option value="">Select Department</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="pediatrics">Pediatrics</option>
            </select>
          </div>
          {formError && <p className="form-error">{formError}</p>}
          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;