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
  const [showDentalAppointmentModal, setShowDentalAppointmentModal] =
    useState(false);
  const [showSpayNeuterAppointmentModal, setShowSpayNeuterAppointmentModal] =
    useState(false);
  const [showContactUsModal, setShowContactUsModal] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
      ReactGA4.send("pageview");
    }
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
        <p>Monday - Friday: 8am - 5pm</p>
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

  const introContent = (
    <div className="content-container intro">
      <div className="content-block">
        <h1 className="header">Evans</h1>
        <p>
          Our Evans location is focused on providing dental and other surgical
          procedures for dogs and cats. Our competitive flat-rate pricing
          ensures that you know exactly what you will pay.
        </p>
      </div>
    </div>
  );

  const pricing = (
    <div className="content-container evans-pricing">
      <div className="content-block">
        <h1 className="header">Pricing</h1>
        <p className="mt-3">
          We use flat-rate pricing for all of our procedures. What that means
          for you:
        </p>
        <ul className="ms-5">
          <li>No surprises - you pay exactly what we quote</li>
          <li>
            All presurgical bloodwork, services, and medications to go home are
            already included in the price
          </li>
        </ul>

        <div className="d-flex align-items-center mt-5 mb-2">
          <h2 className="me-3">Dental Services</h2>
          <h3 className="font-18">
            (Teeth cleaning, Dental X-Ray, Extractions, Gingivectomy, etc.)
          </h3>
        </div>
        <p>
          We can't give an exact flat-rate quote without a dental evaluation.
          However...
        </p>
        <ul className="ms-5">
          <li>Our dental procedures start at $500</li>
          <li>More than 50% of our procedures cost $800 or less</li>
          <li>
            Only 5% of procedures cost more than $1,500, and no procedure costs
            more than $2,000
          </li>
        </ul>
        <button
          className="btn-filled-primary font-18 my-4"
          style={{ width: "250px" }}
          onClick={() => setShowDentalAppointmentModal(true)}
        >
          Schedule Free Evaluation
        </button>

        <h2 className="mt-4 mb-2">Spay & Neuter Surgery</h2>
        <ul className="ms-5">
          <li>$480</li>
        </ul>
        <button
          className="btn-filled-primary font-18 my-4"
          style={{ width: "250px" }}
          onClick={() => setShowSpayNeuterAppointmentModal(true)}
        >
          Schedule Spay/Neuter
        </button>

        <h2 className="mt-4 mb-2">Abdominal Explore/Foreign Body Removal</h2>
        <ul className="ms-5">
          <li>$3,900</li>
        </ul>

        <h2 className="mt-4 mb-2">Other General Anesthesia Procedures</h2>
        <ul className="ms-5">
          <li>Call for custom flat-rate quote</li>
        </ul>

        <h1 className="header mt-5">Payment Plans</h1>
        <p className="mt-3">
          Want to pay over time? All of our procedures are eligible for Payment
          Plans!
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
      {pricing}
      {googleMap}
      {showDentalAppointmentModal && (
        <RequestAppointmentModal
          appointmentType="Dental Eval"
          availableDates={[
            "Select Date",
            "Tuesday July 30th",
            "Thursday August 1st",
            "Tuesday August 6th",
            "Wednesday August 7th",
            "Friday August 9th",
          ]}
          availableTimes={[
            { date: "Select Date", times: [] },
            {
              date: "Tuesday July 30th",
              times: ["8:30 am", "4:30 pm"],
            },
            {
              date: "Thursday August 1st",
              times: ["4:30 pm"],
            },
            {
              date: "Tuesday August 6th",
              times: ["8:00 am", "8:30 am", "4:00 pm", "4:30 pm"],
            },
            {
              date: "Wednesday August 7th",
              times: ["8:00 am", "8:30 am", "4:00 pm", "4:30 pm"],
            },
            {
              date: "Friday August 9th",
              times: ["4:00 pm", "4:30 pm"],
            },
          ]}
          handleClose={() => setShowDentalAppointmentModal(false)}
        />
      )}
      {showSpayNeuterAppointmentModal && (
        <RequestAppointmentModal
          appointmentType="Spay/Neuter"
          availableDates={[
            "Select Date",
            "Tuesday July 30th",
            "Tuesday August 6th",
            "Wednesday August 7th",
            "Thursday August 9th",
          ]}
          availableTimes={[
            { date: "Select Date", times: [] },
            { date: "Tuesday July 30th", times: ["7:30 am"] },
            { date: "Tuesday August 6th", times: ["7:45 am"] },
            { date: "Wednesday August 7th", times: ["7:30 am"] },
            { date: "Thursday August 9th", times: ["7:30 am"] },
          ]}
          handleClose={() => setShowSpayNeuterAppointmentModal(false)}
        />
      )}
      {showContactUsModal && (
        <ContactUsModal handleClose={() => setShowContactUsModal(false)} />
      )}
    </Page>
  );
}

function RequestAppointmentModal({
  appointmentType,
  availableDates,
  availableTimes,
  handleClose,
}) {
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
        appointmentType,
        date,
        time,
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
