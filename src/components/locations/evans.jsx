import React, { useState, useEffect } from "react";
import ReactGA4 from "react-ga4";
import Modal from "react-bootstrap/Modal";

import http from "../../services/httpService";

import logo from "../../assets/logo-twin-peaks-dental-surgery-dark.png";

import Input from "../common/input";
import InputSelect from "../common/inputSelect";
import InputTextarea from "../common/inputTextarea";
import Page from "../common/page";
import { Desktop, Tablet, Mobile, NotMobile } from "../common/responsive";

import { ReactComponent as ClockIcon } from "../../assets/clock.svg";
import { ReactComponent as MapIcon } from "../../assets/map-marker-alt.svg";
import { ReactComponent as PhoneIcon } from "../../assets/phone.svg";

import "../../styles/components/locations.scss";

function Evans() {
  const [showRequestAppointmentModal, setShowRequestAppointmentModal] =
    useState(false);
  const [showContactUsModal, setShowContactUsModal] = useState(false);

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
      <br />
      <p
        className="ps-4"
        style={{ maxWidth: "300px", fontFamily: "sura", fontSize: "14px" }}
      >
        *If we are in surgery, please leave a message, and we will get back to
        you shortly
      </p>
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
        <button
          className="btn-filled-primary font-18 mt-3"
          style={{ width: "250px" }}
          onClick={() => setShowContactUsModal(true)}
        >
          Contact Us
        </button>
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
          <div className="mb-4">{hours}</div>
          <div className="mb-4">{phone}</div>
          <div className="mb-4">{address}</div>
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
                {hours}
                <div className="my-3">{phone}</div>
                {address}
              </div>
            </Tablet>
            <Desktop>
              <div className="d-flex flex-column justify-content-around">
                {hours}
              </div>
              <div className="d-flex flex-column justify-content-center">
                {phone}
                <div className="mt-3">{address}</div>
              </div>
            </Desktop>
          </div>
        </div>
      </NotMobile>
    </React.Fragment>
  );

  const promo = (
    <div
      className="content-container p-4"
      style={{ backgroundColor: "#efce97" }}
    >
      <h2 className="roboto">
        Grand Opening Promotion: $500 off any dental procedure!
      </h2>
    </div>
  );

  const introContent = (
    <div className="content-container intro">
      <div className="content-block">
        <h1 className="header">Evans</h1>
        <p>
          Our Evans location is focused on providing dental and other surgical
          procedures for your dog or cat. Our competitive flat-rate pricing
          ensures that you know exactly what you will pay. Schedule your{" "}
          <span className="roboto">FREE</span> consult today to get a quote!
        </p>
        <button
          className="btn-filled-primary font-18 mt-5 align-self-center"
          style={{ width: "250px" }}
          onClick={() => setShowRequestAppointmentModal(true)}
        >
          Schedule Free Consult
        </button>
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
      {promo}
      {introContent}
      {googleMap}
      {showRequestAppointmentModal && (
        <RequestAppointmentModal
          handleClose={() => setShowRequestAppointmentModal(false)}
        />
      )}
      {showContactUsModal && (
        <ContactUsModal handleClose={() => setShowContactUsModal(false)} />
      )}
    </Page>
  );
}

function RequestAppointmentModal({ handleClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [petName, setPetName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async () => {
    try {
      setErrorMessage("");

      await http.post(`/requestAppointment`, {
        firstName,
        lastName,
        phone,
        email,
        petName,
        date,
        time,
      });

      setRequestSubmitted(true);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setRequestSubmitted(false);
    }
  };

  const availableDates = [
    "Select Date",
    "Monday July 15th",
    "Thursday July 18th",
    "Tuesday July 23rd",
    "Wednesday July 24th",
  ];

  const availableTimes = [
    { date: "Select Date", times: [] },
    {
      date: "Monday July 15th",
      times: ["9:00 am", "9:30 am", "3:00 pm", "3:30 pm", "4:00 pm", "4:30 pm"],
    },
    {
      date: "Thursday July 18th",
      times: [
        "8:00 am",
        "8:30 am",
        "9:00 am",
        "9:30 am",
        "3:00 pm",
        "3:30 pm",
        "4:00 pm",
        "4:30 pm",
      ],
    },
    {
      date: "Tuesday July 23rd",
      times: [
        "8:00 am",
        "8:30 am",
        "9:00 am",
        "9:30 am",
        "3:00 pm",
        "3:30 pm",
        "4:00 pm",
        "4:30 pm",
      ],
    },
    {
      date: "Wednesday July 24th",
      times: [
        "8:00 am",
        "8:30 am",
        "9:00 am",
        "9:30 am",
        "3:00 pm",
        "3:30 pm",
        "4:00 pm",
        "4:30 pm",
      ],
    },
  ];

  return (
    <Modal
      className="modal-auto-width"
      show={true}
      onHide={handleClose}
      centered
    >
      <form>
        {errorMessage && <p className="mb-3 sura error">{errorMessage}</p>}

        {requestSubmitted && (
          <React.Fragment>
            <p className="input-width">
              Your request has been submitted. We will be in touch shortly!
            </p>
            <button
              className="mt-4 btn-filled-primary align-self-center"
              onClick={(e) => {
                e.preventDefault();
                handleClose();
              }}
            >
              Close
            </button>
          </React.Fragment>
        )}

        {!requestSubmitted && (
          <React.Fragment>
            <Input
              name="firstName"
              value={firstName}
              label="First Name"
              onChange={setFirstName}
            />
            <Input
              name="lastName"
              value={lastName}
              label="Last Name"
              onChange={setLastName}
            />
            <Input
              name="phone"
              value={phone}
              label="Phone Number"
              onChange={setPhone}
            />
            <Input
              name="email"
              type="email"
              value={email}
              label="Email"
              onChange={setEmail}
            />
            <Input
              name="petName"
              value={petName}
              label="Pet Name"
              onChange={setPetName}
            />
            <InputSelect
              name="date"
              value={date}
              label="Date"
              optionConfig={availableDates}
              rawOptions={true}
              onChange={setDate}
            />
            {availableTimes
              .filter((t) => t.date === date)
              .map((t) =>
                t.times.map((s, i) => (
                  <div key={i} className="radio-line align-items-start mb-2">
                    <input
                      className="mt-1"
                      type="radio"
                      id={`time-${s}`}
                      name="apptTime"
                      checked={time === s}
                      value={s}
                      onChange={({ target }) => setTime(target.value)}
                    />
                    <label
                      className="fw-bolder news-cycle font-16"
                      htmlFor={`time-${s}`}
                    >
                      {s}
                    </label>
                  </div>
                ))
              )}
            <button
              className="mt-4 btn-filled-primary align-self-center"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Submit
            </button>
          </React.Fragment>
        )}
      </form>
    </Modal>
  );
}

function ContactUsModal({ handleClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async () => {
    try {
      setErrorMessage("");

      await http.post(`/contactUs`, {
        firstName,
        lastName,
        phone,
        email,
        content,
      });

      setRequestSubmitted(true);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setRequestSubmitted(false);
    }
  };

  return (
    <Modal
      className="modal-auto-width"
      show={true}
      onHide={handleClose}
      centered
    >
      <form>
        {errorMessage && <p className="mb-3 sura error">{errorMessage}</p>}

        {requestSubmitted && (
          <React.Fragment>
            <p className="input-width">
              Your request has been submitted. We will be in touch shortly!
            </p>
            <button
              className="mt-4 btn-filled-primary align-self-center"
              onClick={(e) => {
                e.preventDefault();
                handleClose();
              }}
            >
              Close
            </button>
          </React.Fragment>
        )}

        {!requestSubmitted && (
          <React.Fragment>
            <Input
              name="firstName"
              value={firstName}
              label="First Name"
              onChange={setFirstName}
            />
            <Input
              name="lastName"
              value={lastName}
              label="Last Name"
              onChange={setLastName}
            />
            <Input
              name="phone"
              value={phone}
              label="Phone Number"
              onChange={setPhone}
            />
            <Input
              name="email"
              type="email"
              value={email}
              label="Email"
              onChange={setEmail}
            />
            <InputTextarea
              name="content"
              value={content}
              label="How can we help you?"
              rows="4"
              onChange={setContent}
            />
            <button
              className="mt-4 btn-filled-primary align-self-center"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Submit
            </button>
          </React.Fragment>
        )}
      </form>
    </Modal>
  );
}

export default Evans;
