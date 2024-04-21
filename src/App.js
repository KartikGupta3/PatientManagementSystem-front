import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appointment from "./components/Appointments/Appointment";
import Dashboard from "./components/Dashboard/Dashboard";
import DownloadReport from "./components/DownloadReport/DownloadReports";
import LoginPage from "./components/LoginPage/Login";
import ProfilePage from "./components/ProfilePage/Profile";
import Treatment from "./components/Treatment/SetTreatment";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/appointment" component={Appointment} />
          <Route path="/treatment" component={Treatment} />
          <Route path="/download-report" component={DownloadReport} />
          <Route component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
