import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Appointment from "./components/Appointments/Appointment";
import Dashboard from "./components/Dashboard/Dashboard";
import DownloadReport from "./components/DownloadReport/DownloadReports";
import LoginPage from "./components/LoginPage/Login";
import ProfilePage from "./components/ProfilePage/Profile";
import Treatment from "./components/Treatment/SetTreatment";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/download-report" element={<DownloadReport />} />
      </Routes>
    </Router>
  );
};

export default App;
