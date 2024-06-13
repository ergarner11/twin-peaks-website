import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";

import logo from "../../assets/logo-twin-peaks-dental-surgery-dark.png";

import Page from "../common/page";
import { Desktop, Tablet, Mobile, NotMobile } from "../common/responsive";

import { ReactComponent as ClockIcon } from "../../assets/clock.svg";
import { ReactComponent as MapIcon } from "../../assets/map-marker-alt.svg";
import { ReactComponent as PhoneIcon } from "../../assets/phone.svg";

import "../../styles/components/locations.scss";

function Evans() {
  useEffect(() => {
    ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
    ReactGA4.send("pageview");
  }, []);

  const phone = (
    <a href="tel: 970-836-1208">
      <div className="phone">
        <PhoneIcon />
        <p>970-836-1208</p>
      </div>
    </a>
  );

  const address = (
    <div
      className="address"
      onClick={() => window.open("https://maps.app.goo.gl/AfYri5c4xF97NAdZ7")}
    >
      <MapIcon />
      <div>
        <p>3629 23rd Avenue</p>
        <p>Evans, CO 80620</p>
      </div>
    </div>
  );

  const hours = (
    <div className="hours d-flex">
      <ClockIcon className="me-3 mt-3" />
      <div>
        <p>Monday - Friday: By Appointment</p>
        <p>Saturday: Closed</p>
        <p>Sunday: Closed</p>
        <br />
        <p style={{ maxWidth: "300px", fontFamily: "sura", fontSize: "14px" }}>
          *Our voicemail is regularly monitored. Please leave a message, and we
          will get back to you as soon as we can.
        </p>
      </div>
    </div>
  );

  const contactInfo = (
    <React.Fragment>
      <Mobile>
        <div className="d-flex flex-column align-items-start background-white p-4">
          <img
            src={logo}
            className="align-self-center mb-4"
            height="150px"
            alt="Twin Peaks Veterinary Dental & Surgery logo"
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
              height="150px"
              alt="Twin Peaks Veterinary Dental & Surgery logo"
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
        <h1 className="header">Evans</h1>
        <p>
          Our Evans location is focused on providing dental and other surgical
          procedures for your dog or cat. Our competitive flat-rate pricing
          ensures that you know exactly what you will pay. Schedule a consult
          today to get a quote!
        </p>
      </div>
    </div>
  );

  const googleMap = (
    <div style={{ lineHeight: "0" }}>
      <iframe
        title="Twin Peaks Veterinary Dental & Surgery Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12157.429948912322!2d-104.716708!3d40.3787689!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876ea10068c1d6fd%3A0x4477530c9e58e3e7!2sTwin%20Peaks%20Vet%20Center!5e0!3m2!1sen!2sus!4v1718227304417!5m2!1sen!2sus"
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
      selectedLevel2="evans"
      className="locations"
      title="Twin Peaks Veterinary Dental & Surgery | Evans, CO"
      description="We are a locally-owned, innovative veterinary clinic focused on dental and other surgical procedures for dogs and cats"
    >
      {contactInfo}
      {introContent}
      {googleMap}
    </Page>
  );
}

export default Evans;
