import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Start from "./Components/Start";
import PatientLogin from "./Components/PatientLogin";
import PatientDetail from "./Components/PatientDetail";
import DoctorLogin from "./Components/DoctorLogin";
import DoctorDetail from "./Components/DoctorDetail";
import ChangeTreatment from "./Components/changeTreatment";
import ManagePatients from "./Components/ManagePatients";
import ManageDoctors from "./Components/ManageDoctors";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/patient_login" element={<PatientLogin />}></Route>
        <Route path="/doctorlogin" element={<DoctorLogin />}></Route>
        <Route path="/patient_detail" element={<PatientDetail />}></Route>
        <Route path="/doctor_detail" element={<DoctorDetail />}></Route>
        <Route path="/manage_patients" element={<ManagePatients />}></Route>
        <Route path="/manage_doctor" element={<ManageDoctors />}></Route>
        <Route path="/change-treatment" element={<ChangeTreatment />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
