import React, { useState } from "react";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import Page from "./common/page";
import { Mobile, NotMobile } from "./common/responsive";

import { ReactComponent as CheckIcon } from "../assets/check.svg";
import { ReactComponent as TimesIcon } from "../assets/times.svg";

import "../styles/components/health-plans.scss";

function HealthPlans() {
  const [species, setSpecies] = useState("Dog");

  const hpTeaser = (
    <div className="teaser">
      <div className="section-1">
        <div className="stat">
          <p className="mb-2">
            <span className="number">3</span> out of{" "}
            <span className="number">4</span>
          </p>
          <p className="font-16">clients we see</p>
          <p className="have-hp mb-4">have a Health Plan</p>
        </div>
        <p className="let-us-help">
          Let us help you find the Health Plan that is right for you and your
          pet!
        </p>
      </div>
      <div className="section-2">
        <h1>Health Plans help your pet get the best care</h1>
        <button
          className="btn-rounded white background-orange"
          onClick={() => (window.location.hash = "pricing")}
        >
          Pricing
        </button>
      </div>
    </div>
  );

  const header = (text) => {
    return (
      <React.Fragment>
        <Mobile>
          <div className="text-center py-3 bold" style={{ fontSize: "25px" }}>
            {text}
          </div>
        </Mobile>
        <NotMobile>
          <div className="text-center py-3 bold" style={{ fontSize: "35px" }}>
            {text}
          </div>
        </NotMobile>
      </React.Fragment>
    );
  };

  const preventiveCare = (
    <div className="inclusion-panel">
      <div className="header">Preventive Care</div>
      <div className="content">
        <ul>
          <li>Routine Care</li>
          <ul className="secondary-ul">
            <li>All recommended core vaccines & boosters</li>
            <li>Heartworm tests for dogs</li>
            <li>FELV/FIV tests for cats</li>
            <li>Fecal floats</li>
            <li>Routine deworming for roundworm and hookworm</li>
            <li>Nail trims</li>
            <li>Anal gland expressions</li>
            <li>Euthanasia</li>
          </ul>
          <li>Spay or Neuter Surgery</li>
          <li>Discount on Heartworm Prevention</li>
          <li>50% Discount on Elective Procedures</li>
        </ul>
      </div>
    </div>
  );

  const didYouKnow = (
    <div className="did-you-know">
      <p className="did-you-know-header">Did you know?</p>
      <p>
        Preventive care is critical for every pet. Our Veterinarians take time
        to examine each pet from nose to tail including an oral exam to evaluate
        their need for dental care.
      </p>
    </div>
  );

  const officeVisits = (
    <div className="inclusion-panel">
      <div className="header">$20 Office Visits</div>
      <div className="content">
        <ul>
          <li>Adult Dogs and Cats</li>
          <ul className="secondary-ul">
            <li>$20 office visits for first 3 visits</li>
            <li>$50 for any additional visits in a single health plan year</li>
          </ul>
          <li>Puppies and Kittens</li>
          <ul className="secondary-ul">
            <li>$20 for ALL wellness visits</li>
            <li>$50 for all other visits</li>
          </ul>
        </ul>
      </div>
      {didYouKnow}
    </div>
  );

  const discount = (
    <div className="inclusion-panel">
      <div className="header">Discount on In-Clinic Services</div>
      <div className="content">
        <ul>
          <li>In-Clinic Services</li>
          <ul className="secondary-ul">
            <li>Diagnostics</li>
            <li>X-rays</li>
            <li>Hospitalization</li>
            <li>In-House labs</li>
            <li>Non-Specialty Surgery</li>
            <li>AND more</li>
          </ul>
        </ul>
      </div>
      <div className="stat">
        <p className="mb-2">
          <span className="number">1</span> in <span className="number">3</span>
        </p>
        <p>pets will need unexpected veterinary care each year</p>
      </div>
      <p className="white text-center pb-3" style={{ fontSize: "20px" }}>
        Get up to 90% off These Services!
      </p>
    </div>
  );

  const notIncluded = (
    <div className="not-included">
      <div className="header">What's Not Included?</div>
      <div className="content">
        <p>
          The following are not discounted or included in each Health Plan:
          Services performed by visiting specialists or other clinics,
          cremation, outside diagnostics, pharmacy, and retail items
        </p>
        <p>
          Any dental procedures are also not included in the Health Plan unless
          you have a <span className="bold">Dental-Enhanced Health Plan</span>.
        </p>
      </div>
    </div>
  );

  const dentalEnhanced = (
    <div className="dental-enhanced">
      <div className="header">What are Dental-Enhanced Health Plans?</div>
      <div className="content">
        <div className="details">
          <p>
            Dental-Enhanced Health Plans are specifically for pets who need
            dental cleanings, tooth extractions, or other oral surgery.
          </p>
          <p>
            You can <span className="bold">upgrade at any time</span> to a
            Dental Enhanced Health Plan from any other Health Plan. This means
            you only pay for a Health Plan with Dental Coverage on years that
            you take advantage of that benefit!
          </p>
        </div>
        <div className="inclusions">
          <p className="inclusions-header">
            Dental-Enhanced <nobr>Plans Include:</nobr>
          </p>
          <ul>
            <li>One Dental Cleaning</li>
            <li>50% - 90% Discount on ALL other in-clinic dental procedures</li>
            <li>PLUS all other Health Plan services</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const disclaimer = (
    <p className="font-16 text-center p-3">
      *Website contains general overview of Health Plan details. Please call us
      with any questions
    </p>
  );

  const checkMark = <CheckIcon className="attention" />;
  const xMark = <TimesIcon className="error" />;

  const allCheckedRow = (rowName) => {
    return (
      <tr>
        <td className="item-column">{rowName}</td>
        <td className="item-inclusion-status">{checkMark}</td>
        <td className="item-inclusion-status">{checkMark}</td>
        <td className="item-inclusion-status recommended-cell">{checkMark}</td>
        <td className="item-inclusion-status">{checkMark}</td>
      </tr>
    );
  };

  const pricing = (
    <div id="pricing" className="pricing">
      {header("Pricing")}
      <div className="toggle">
        <button
          onClick={() => setSpecies("Dog")}
          className={`option ${
            species === "Dog" ? "btn-rounded selected" : ""
          }`}
        >
          Dog
        </button>
        <button
          onClick={() => setSpecies("Cat")}
          className={`option ${
            species === "Cat" ? "btn-rounded selected" : ""
          }`}
        >
          Cat
        </button>
      </div>
      <div className="pricing-table">
        <table>
          <thead>
            <tr>
              <th className="no-fill"></th>
              <th className="no-fill"></th>
              <th className="no-fill"></th>
              <th className="recommended">RECOMMENDED</th>
              <th className="no-fill"></th>
            </tr>
            <tr>
              <th className="no-fill"></th>
              <th>50% Plan</th>
              <th>50% Dental-Enhanced</th>
              <th className="recommended-cell">90% Plan</th>
              <th>90% Dental-Enhanced</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="item-column bold text-decoration-underline">
                Monthly Price
              </td>
              <td>
                <span className="price">
                  {species === "Dog" ? "$25" : "$19"}
                </span>{" "}
                /mo*
              </td>
              <td>
                <span className="price">
                  {species === "Dog" ? "$67" : "$61"}
                </span>{" "}
                /mo*
              </td>
              <td className="recommended-cell">
                <span className="price">
                  {species === "Dog" ? "$39" : "$29"}
                </span>{" "}
                /mo*
              </td>
              <td>
                <span className="price">
                  {species === "Dog" ? "$81" : "$71"}
                </span>{" "}
                /mo*
              </td>
            </tr>
            {allCheckedRow("Routine Preventive Care")}
            {allCheckedRow("All Recommended Core Vaccines & Boosters")}
            {species === "Dog" && allCheckedRow("Heartworm Tests")}
            {species === "Cat" && allCheckedRow("FELV/FIV Tests")}
            {allCheckedRow("Fecal Floats")}
            {allCheckedRow("Routine Deworming for Roundworm & Hookworm")}
            {allCheckedRow("Nail Trims")}
            {species === "Dog" && allCheckedRow("Anal Glands Expression")}
            {allCheckedRow("Euthanasia")}
            {allCheckedRow("Spay or Neuter Surgery")}
            {allCheckedRow("Discounted Office Visits")}
            <tr>
              <td className="item-column bold font-16">
                Discount on In-Clinic Services
              </td>
              <td className="bold font-16">50%</td>
              <td className="bold font-16">50%</td>
              <td className="bold font-16 recommended-cell">90%</td>
              <td className="bold font-16">90%</td>
            </tr>
            {allCheckedRow("Discount on Heartworm Prevention")}
            {allCheckedRow("50% Discount on Elective Procedures")}
            <tr>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    Pets with unmanaged health conditions are not eligible to
                    sign up on the 90% plan. They are also not eligible to
                    upgrade from the 50% plan to the 90% plan at renewal.
                  </Tooltip>
                }
                trigger={["click", "hover", "focus"]}
              >
                <td className="item-column">
                  <span className="more-info">
                    Health Condition Qualifications
                  </span>
                </td>
              </OverlayTrigger>
              <td>{xMark}</td>
              <td>{xMark}</td>
              <td className="recommended-cell">{checkMark}</td>
              <td>{checkMark}</td>
            </tr>
            <tr>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    Out-of-pocket max does not apply to Office Visit payments or
                    Health Plan Payments
                  </Tooltip>
                }
                trigger={["click", "hover", "focus"]}
              >
                <td className="item-column">
                  <span className="more-info">$500 Out-of-Pocket Max</span>
                </td>
              </OverlayTrigger>
              <td>{xMark}</td>
              <td>{xMark}</td>
              <td className="recommended-cell">{checkMark}</td>
              <td>{checkMark}</td>
            </tr>
            <tr>
              <td className="item-column">One Dental Cleaning</td>
              <td>{xMark}</td>
              <td>{checkMark}</td>
              <td className="recommended-cell">{xMark}</td>
              <td>{checkMark}</td>
            </tr>
            <tr>
              <td className="item-column bold font-16">
                Discount on Dental Services
              </td>
              <td>{xMark}</td>
              <td className="bold font-16">50%</td>
              <td className="recommended-cell">{xMark}</td>
              <td className="bold font-16">90%</td>
            </tr>
          </tbody>
          <Mobile>
            <thead>
              <tr>
                <th className="no-fill"></th>
                <th>50% Plan</th>
                <th>50% Dental-Enhanced</th>
                <th className="recommended-cell">90% Plan</th>
                <th>90% Dental-Enhanced</th>
              </tr>
            </thead>
          </Mobile>
        </table>
      </div>
      <div className="d-flex flex-column align-items-center">
        <p className="ps-3 pb-2 align-self-start sura">
          *Down Payment of $60 required for 1st year, reducing monthly payment
          by $5/month
        </p>
        <p className="ps-3 align-self-start sura">
          *Health Plan Participation Charge can be billed annually at request
        </p>
      </div>
      <p className="call-to-action">
        Ready to go or have more questions? We would love to talk you through
        it!
      </p>
      <a href="tel: 970-663-0218">
        <button className="btn-rounded call-btn">Call us Now!</button>
      </a>
    </div>
  );

  return (
    <Page
      selectedTab="healthPlans"
      className="health-plan"
      title="Health Plans"
      description="Our Health Plans are flexible, affordable, and central to our mission to make quality care accessible to every pet. Whatever you need, we can help!"
    >
      <Mobile>
        {hpTeaser}
        {header("Included in ALL Health Plans")}
        {preventiveCare}
        {officeVisits}
        {discount}
        {notIncluded}
        {dentalEnhanced}
        {disclaimer}
        {pricing}
      </Mobile>
      <NotMobile>
        <div className="background-black">
          <div className="container d-flex w-100">{hpTeaser}</div>
        </div>
        <div className="container">
          {header("Included in ALL Health Plans")}
          <div className="d-flex">
            {preventiveCare}
            {officeVisits}
            {discount}
          </div>
          {notIncluded}
          {dentalEnhanced}
          {disclaimer}
          {pricing}
        </div>
      </NotMobile>
    </Page>
  );
}
export default HealthPlans;
