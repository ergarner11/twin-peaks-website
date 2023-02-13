import React from "react";

import logo from "../assets/logo-dark.webp";

import Address from "./common/address";
import Hours from "./common/hours";
import Phone from "./common/phone";
import RequestAppointment from "./common/requestAppointment";
import RequestRefill from "./common/requestRefill";
import ReviewRequest from "./common/reviewRequest";
import { Mobile, Tablet, Desktop, NotMobile } from "./common/responsive";

function Banner() {
  return (
    <React.Fragment>
      <Mobile>
        <div className="d-flex flex-column align-items-center background-white p-4">
          <div className="pb-4">
            <Phone />
          </div>
          <div className="pb-4">
            <Address />
          </div>
          <div className="pb-4">
            <Hours />
          </div>
          <div className="pb-3 w-100" style={{ maxWidth: "250px" }}>
            <RequestAppointment />
          </div>
          <div className="pb-3 w-100" style={{ maxWidth: "250px" }}>
            <RequestRefill />
          </div>
          <div className="w-100" style={{ maxWidth: "250px" }}>
            <ReviewRequest />
          </div>
        </div>
      </Mobile>
      <NotMobile>
        <div className="d-flex justify-content-center background-white">
          <div
            className="d-flex justify-content-between flex-grow-1 p-4"
            style={{ maxWidth: "1024px" }}
          >
            <img
              src={logo}
              width="200px"
              height="144px"
              alt="Twin Peaks Veterinary CLinic logo"
            />
            <Tablet>
              <div className="d-flex flex-column justify-content-between">
                <Phone />
                <div className="my-3">
                  <Address />
                </div>
                <Hours />
              </div>
              <div className="d-flex flex-column justify-content-evenly align-items-center">
                <RequestAppointment />
                <RequestRefill />
                <ReviewRequest />
              </div>
            </Tablet>
            <Desktop>
              <div className="d-flex flex-column justify-content-center">
                <Phone />
                <div className="mt-3">
                  <Address />
                </div>
              </div>
              <div className="d-flex flex-column justify-content-around">
                <Hours />
              </div>
              <div className="d-flex flex-column justify-content-between align-items-center">
                <RequestAppointment />
                <RequestRefill />
                <ReviewRequest />
              </div>
            </Desktop>
          </div>
        </div>
      </NotMobile>
    </React.Fragment>
  );
}

export default Banner;
