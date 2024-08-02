import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";

import logo from "../../assets/logo-twin-peaks-vet-clinic-dark.webp";

import Page from "../common/page";
import { Desktop, Tablet, Mobile, NotMobile } from "../common/responsive";

import { ReactComponent as ClockIcon } from "../../assets/clock.svg";
import { ReactComponent as HospitalIcon } from "../../assets/hospital.svg";
import { ReactComponent as MapIcon } from "../../assets/map-marker-alt.svg";
import { ReactComponent as PhoneIcon } from "../../assets/phone.svg";

import "../../styles/components/locations.scss";

function Loveland() {
  useEffect(() => {
    ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
    ReactGA4.send("pageview");
  }, []);

  const phone = (
    <a href="tel: 970-663-0218">
      <div className="phone">
        <PhoneIcon />
        <p>Call or Text: 970-663-0218</p>
      </div>
    </a>
  );

  const address = (
    <div
      className="address"
      onClick={() => window.open("https://goo.gl/maps/5ghat8LjDvdBo7wC6")}
    >
      <MapIcon />
      <div>
        <p>4007 S Lincoln Ave, Suite 470</p>
        <p>Loveland, CO 80537</p>
      </div>
    </div>
  );

  const hours = (
    <div className="hours d-flex">
      <ClockIcon className="me-3 mt-3" />
      <div>
        <p>Monday - Friday: 8am - 6pm</p>
        <p>Saturday: 8am - 5pm</p>
        <p>Sunday: Closed</p>
        <br />
        <p>Sept. 2nd (Labor Day): Closed</p>
      </div>
    </div>
  );

  const contactInfo = (
    <React.Fragment>
      <Mobile>
        <div className="d-flex flex-column align-items-start background-white p-4">
          <img
            src={logo}
            className="align-self-center mb-5"
            height="150px"
            alt="Twin Peaks Veterinary CLinic logo"
          />
          <div className="mb-4">{phone}</div>
          <div className="mb-4">{address}</div>
          <div className="mb-4">{hours}</div>
        </div>
      </Mobile>
      <NotMobile>
        <div className="d-flex justify-content-center background-white">
          <div
            className="d-flex justify-content-between flex-grow-1 px-4 py-5"
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
                {phone}
                <div className="my-3">{address}</div>
                {hours}
              </div>
            </Tablet>
            <Desktop>
              <div className="d-flex flex-column justify-content-center">
                {phone}
                <div className="mt-3">{address}</div>
              </div>
              <div className="d-flex flex-column justify-content-around">
                {hours}
              </div>
            </Desktop>
          </div>
        </div>
      </NotMobile>
    </React.Fragment>
  );

  const introContent = (
    <div className="content-container intro">
      <div className="content-block">
        <h1 className="header">Loveland</h1>
        <p>
          Our Loveland location has been serving Loveland, Berthoud, Johnstown,
          Milliken and the surrounding area for over 10 years! We are a
          full-service general practice veterinary clinic for dogs and cats.
          We'd love to welcome you to our Twin Peaks family. Call us today to
          schedule your first appointment!
        </p>
      </div>
    </div>
  );

  const emergencyContent = (
    <div className="content-container emergency">
      <div className="content-block">
        <h2 className="header align-self-center">Emergency Information</h2>
        <div className="sections mt-5">
          <div className="section">
            <ClockIcon />
            <p className="primary">Regular Business Hours</p>
            <p className="mt-3 secondary">
              Don't hesitate to give us a call. We'll help you determine the
              best path forward.
            </p>
            <a href="tel: 970-663-0218">
              <div className="flex-row-aligned justify-content-center my-4">
                <PhoneIcon />
                <span className="font-18 bold roboto">
                  Call us at (970) 663-0218
                </span>
              </div>
            </a>
            <NotMobile>
              <img
                src={logo}
                alt="Twin Peaks Veterinary Clinic logo"
                className="mt-3"
                width="120px"
              />
            </NotMobile>
          </div>
          <Mobile>
            <div className="border my-5 mx-4"></div>
          </Mobile>
          <div className="section">
            <HospitalIcon />
            <p className="primary">After Hours</p>
            <p className="secondary">Call an emergency clinic we trust:</p>
            <div className="reference">
              <p className="name">Four Seasons Veterinary Specialists: </p>
              <p className="number">970-800-1106</p>
              <p className="location">Loveland, CO</p>
            </div>
            <div className="reference">
              <p className="name">
                VCA Veterinary Specialists of Northern Colorado:{" "}
              </p>
              <p className="number">970-278-0668</p>
              <p className="location">Loveland, CO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const googleMap = (
    <div style={{ lineHeight: "0" }}>
      <iframe
        title="Twin Peaks Veterinary Clinic Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.615369139024!2d-105.07876308413698!3d40.350877679372914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8769548b9009aaa3%3A0x93917b741b079537!2sTwin%20Peaks%20Veterinary%20Clinic!5e0!3m2!1sen!2sus!4v1645139818432!5m2!1sen!2sus"
        width="100%"
        height="600px"
        allowFullScreen=""
        loading="lazy"
      />
    </div>
  );

  return (
    <Page
      selectedTab="locations"
      selectedLevel2="loveland"
      className="locations"
      title="Twin Peaks Veterinary Clinic | Loveland, CO"
      description="We are a locally owned, innovative veterinary clinic serving Loveland, Berthoud, Johnstown, Milliken and the surrounding area."
    >
      {contactInfo}
      {introContent}
      {emergencyContent}
      {googleMap}
    </Page>
  );
}

export default Loveland;
