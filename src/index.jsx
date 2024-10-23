import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppointmentRequest from "./components/locations/appointmentRequest";
import Loveland from "./components/locations/loveland";

import HealthPlans from "./components/healthPlans";
import HealthPlanVideo from "./components/healthPlanVideo";
import HealthPlanContractVideo from "./components/healthPlanContractVideo";
import Home from "./components/home";
import OurTeam from "./components/ourTeam";

import Allergies from "./components/services/allergies";
import Dentistry from "./components/services/dentistry";
import Diagnostics from "./components/services/diagnostics";
import Microchip from "./components/services/microchip";
import Nutrition from "./components/services/nutrition";
import SpayNeuter from "./components/services/spayNeuter";
import TPLO from "./components/services/tplo";
import Vaccines from "./components/services/vaccines";
import Wellness from "./components/services/wellness";

import "./styles/style.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/locations/loveland" element={<Loveland />} />
        <Route exact path="/health-plans" element={<HealthPlans />} />
        <Route exact path="/health-plans/video" element={<HealthPlanVideo />} />
        <Route
          exact
          path="/health-plans/contract-video"
          element={<HealthPlanContractVideo />}
        />
        <Route exact path="/our-team" element={<OurTeam />} />
        <Route exact path="/services/allergies" element={<Allergies />} />
        <Route exact path="/services/dentistry" element={<Dentistry />} />
        <Route exact path="/services/diagnostics" element={<Diagnostics />} />
        <Route exact path="/services/microchip" element={<Microchip />} />
        <Route exact path="/services/nutrition" element={<Nutrition />} />
        <Route exact path="/services/spay-neuter" element={<SpayNeuter />} />
        <Route exact path="/services/tplo-surgery" element={<TPLO />} />
        <Route exact path="/services/vaccines" element={<Vaccines />} />
        <Route exact path="/services/wellness" element={<Wellness />} />
        <Route
          exact
          path="/dental-eval-request/gv"
          element={
            <AppointmentRequest
              appointmentType="Dental Eval"
              headerText="Free Dental Evaluation"
              analyticsEventName="dental_eval_request_submitted_genius_vets"
            />
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
