import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HealthPlans from "./components/healthPlans";
import HealthPlanVideo from "./components/healthPlanVideo";
import HealthPlanContractVideo from "./components/healthPlanContractVideo";
import Home from "./components/home";
import Services from "./components/services";
import OurTeam from "./components/ourTeam";
import CirdcNotice from "./components/cirdcNotice";

import Allergies from "./components/services/allergies";
import Cirdc from "./components/services/cirdc";
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
        <Route exact path="/health-plans" element={<HealthPlans />} />
        <Route exact path="/health-plans/video" element={<HealthPlanVideo />} />
        <Route
          exact
          path="/health-plans/contract-video"
          element={<HealthPlanContractVideo />}
        />
        <Route exact path="/our-team" element={<OurTeam />} />
        {/*<Route exact path="/pricing" element={<HealthPlans />} />*/}
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/services/allergies" element={<Allergies />} />
        <Route exact path="/services/cirdc" element={<Cirdc />} />
        <Route exact path="/services/dentistry" element={<Dentistry />} />
        <Route exact path="/services/diagnostics" element={<Diagnostics />} />
        <Route exact path="/services/microchip" element={<Microchip />} />
        <Route exact path="/services/nutrition" element={<Nutrition />} />
        <Route exact path="/services/spay-neuter" element={<SpayNeuter />} />
        <Route exact path="/services/tplo-surgery" element={<TPLO />} />
        <Route exact path="/services/vaccines" element={<Vaccines />} />
        <Route exact path="/services/wellness" element={<Wellness />} />
        <Route exact path="/cirdc-notice" element={<CirdcNotice />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
