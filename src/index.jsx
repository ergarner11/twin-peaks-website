import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HealthPlans from "./components/healthPlans";
import HealthPlanVideo from "./components/healthPlanVideo";
import HealthPlanContractVideo from "./components/healthPlanContractVideo";
import Home from "./components/home";
import Services from "./components/services";
import OurTeam from "./components/ourTeam";

import Dentistry from "./components/services/dentistry";
import Vaccines from "./components/services/vaccines";

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
        <Route exact path="/services/dentistry" element={<Dentistry />} />
        <Route exact path="/services/vaccines" element={<Vaccines />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
