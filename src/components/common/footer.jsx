import React from "react";

import Address from "./address";
import Hours from "./hours";
import Phone from "./phone";
import Links from "./links";
import RequestAppointment from "./requestAppointment";
import RequestRefill from "./requestRefill";
import Social from "./social";
import { Desktop, Mobile, NotMobile } from "./responsive";

function Footer() {
  return (
    <div className="background-black p-4">
      <div className="container">
        <Mobile>
          <div className="d-flex flex-column align-items-center">
            <div className="my-4">
              <Address darkmode />
            </div>
            <div className="mb-4">
              <Phone darkmode />
            </div>
            <div className="mb-4">
              <Hours darkmode />
            </div>
            <div className="mb-4">
              <Social darkmode />
            </div>
            <div className="w-100" style={{ maxWidth: "250px" }}>
              <RequestAppointment darkmode />
            </div>
            <div className="my-4 w-100" style={{ maxWidth: "250px" }}>
              <RequestRefill darkmode />
            </div>
            <nav className="mt-4">
              <div className="d-flex flex-column nav-tabs">
                <Links />
              </div>
            </nav>
          </div>
        </Mobile>
        <NotMobile>
          <div className="d-flex justify-content-between align-items-center mx-4 h-100">
            <div
              className="d-flex flex-column justify-content-around"
              style={{ height: "150px" }}
            >
              <Address darkmode />
              <Phone darkmode />
              <div className="align-self-center">
                <Social darkmode />
              </div>
            </div>
            <Hours darkmode expanded />
            <Desktop>
              <div className="d-flex flex-column">
                <RequestAppointment darkmode />
                <div className="mt-3">
                  <RequestRefill darkmode />
                </div>
              </div>
            </Desktop>
            <nav style={{ width: "200px" }}>
              <div className="d-flex flex-column nav-tabs">
                <Links />
              </div>
            </nav>
          </div>
        </NotMobile>
        <p className="mt-4 pt-3 w-100 text-center border-top white">
          Copyright <span style={{ fontSize: "1.3em", margin: "0" }}>©</span>{" "}
          2022 Twin Peaks Veterinary Clinic
        </p>
      </div>
    </div>
  );
}

export default Footer;
