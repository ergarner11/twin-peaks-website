import React from "react";

import logo from "../assets/logo-dark.webp";
import { ReactComponent as CalendarIcon } from "../assets/calendar-icon.svg";
import { ReactComponent as ClockIcon } from "../assets/clock.svg";
import { ReactComponent as MapIcon } from "../assets/map-marker-alt.svg";
import { ReactComponent as PhoneIcon } from "../assets/phone.svg";
import { ReactComponent as PrescriptionIcon } from "../assets/prescription-icon.svg";

import { Mobile, NotMobile } from "./common/responsive";

function Banner() {
  const address = (
    <div
      className="d-flex align-items-center pointer"
      onClick={() => window.open("https://goo.gl/maps/5ghat8LjDvdBo7wC6")}
    >
      <MapIcon style={{ height: "25px" }} className="align-self-center me-3" />
      <div>
        <p className="font-16">4007 S Lincoln Ave, Suite 470</p>
        <p className="font-16">Loveland, CO 80537</p>
      </div>
    </div>
  );

  const hours = (
    <div>
      <p>Monday - Friday: 8am - 6pm</p>
      <p>Saturday: 8am - 5pm</p>
      <p>Sunday: Closed</p>
    </div>
  );

  const phone = (
    <a href="tel: 970-663-0218">
      <div className="d-flex pointer">
        <PhoneIcon
          style={{ height: "25px" }}
          className="align-self-center me-3"
        />
        <p className="font-16 bold">Call or Text: 970-663-0218</p>
      </div>
    </a>
  );

  const reqestAppt = (
    <button
      className="btn-rounded-primary w-100"
      onClick={() =>
        window.open(
          "https://connect.allydvm.com/practice/twinpeaks/appointment_request"
        )
      }
    >
      <CalendarIcon />
      Request Appointment
    </button>
  );

  const refillPrescription = (
    <button
      className="btn-rounded-secondary w-100"
      onClick={() =>
        window.open(
          "https://connect.allydvm.com/practice/twinpeaks/refill_request"
        )
      }
    >
      <PrescriptionIcon />
      Refill Prescription
    </button>
  );

  return (
    <React.Fragment>
      <Mobile>
        <div className="d-flex flex-column align-items-center background-white p-4">
          <div className="pb-3 d-flex">{address}</div>
          <div className="pb-3 d-flex">
            <ClockIcon
              style={{ height: "25px" }}
              className="align-self-center me-3"
            />
            {hours}
          </div>
          <div className="pb-4 d-flex">{phone}</div>
          <div className="pb-3 w-100" style={{ maxWidth: "250px" }}>
            {reqestAppt}
          </div>
          <div className="w-100" style={{ maxWidth: "250px" }}>
            {refillPrescription}
          </div>
        </div>
      </Mobile>
      <NotMobile>
        <div className="d-flex justify-content-center background-white">
          <div
            className="d-flex justify-content-between flex-grow-1 py-4 px-5"
            style={{ maxWidth: "1024px" }}
          >
            <div className="d-flex">
              <img
                src={logo}
                width="200px"
                height="144px"
                alt="Twin Peaks Veterinary CLinic logo"
              />
              <div className="d-flex flex-column justify-content-between ps-5 bold">
                {address}
                {hours}
              </div>
            </div>
            <div className="d-flex flex-column justify-content-between align-items-center">
              {phone}
              {reqestAppt}
              {refillPrescription}
            </div>
          </div>
        </div>
      </NotMobile>
    </React.Fragment>
  );
}

export default Banner;
