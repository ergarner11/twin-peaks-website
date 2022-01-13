import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HealthPlans from "./components/healthPlans";
import Home from "./components/home";
import OurTeam from "./components/ourTeam";

import "./styles/style.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/health-plans" element={<HealthPlans />} />
        <Route exact path="/our-team" element={<OurTeam />} />
        {/*<Route exact path="/pricing" element={<HealthPlans />} />*/}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
