import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import intro from "../assets/intro.webp";

import Page from "./common/page";
import { Mobile, NotMobile } from "./common/responsive";

import { ReactComponent as ArrowRightIcon } from "../assets/arrow-right.svg";
import { ReactComponent as AwardIcon } from "../assets/award.svg";
import { ReactComponent as ExclamationIcon } from "../assets/exclamation-circle.svg";
import { ReactComponent as HeartIcon } from "../assets/heart.svg";
import { ReactComponent as PawIcon } from "../assets/paw.svg";
import { ReactComponent as PhoneIcon } from "../assets/phone.svg";

import "../styles/components/home.scss";

function Home() {
  const [showCoupon, setShowCoupon] = useState(false);

  const couponBanner = (
    <div className="coupon-banner">
      <p>New Client? Give us a try - It's FREE!</p>
      <button
        className="btn-rounded-secondary"
        onClick={() => setShowCoupon(true)}
      >
        Click for Coupon
      </button>
    </div>
  );

  const teaser = (
    <div className="teaser">
      <div className="section-1">
        <p className="header">Need Care? Our Health Plans Can Help</p>
        <p className="subtext">
          1 in 3 pets need unexpected veterinary care each year. When it
          happens, we want the focus to be on your pet, not on your finances
        </p>
        <Link to="health-plans">
          <button className="btn-rounded">
            <ArrowRightIcon />
            About our Health Plans
          </button>
        </Link>
      </div>
      <div className="section-2">
        <img src={intro} alt="veterinarian working with a dog" />
      </div>
    </div>
  );

  const introContent = (
    <div className="content-block intro">
      <h1 className="header">
        <AwardIcon />
        Locally Owned Loveland Vet Clinic!
      </h1>
      <p>
        Welcome to our Twin Peaks family! We are a locally owned, innovative
        veterinary clinic located in Loveland, CO. In all we do, we strive to
        provide the best care for your dog or cat. From our caring and
        highly-qualified staff to our beautiful fully-equiped clinic, we are
        confident that you will find many reasons to love us!
      </p>
      <p>
        We're conveniently located to serve Loveland, Berthoud, Johnstown,
        Milliken and the surrounding area.
      </p>
    </div>
  );

  const missionContent = (
    <div className="content-block mission">
      <p className="header">
        <HeartIcon />
        Our Mission
      </p>
      <p>
        Twin Peaks was built on the idea that high quality veterinary care
        should be accessible to everyone. We know that tight finances prevent
        far too many pets from getting the care they need, and we're working
        hard to provide affordable solutions. Our Health Plans, which are
        central to our mission, are{" "}
        <span className="bold">
          specifically designed to reduce financial barriers for pet parents.
        </span>
      </p>
      <Link to="health-plans">
        <button className="btn-filled-primary">Learn More</button>
      </Link>
    </div>
  );

  const newAdditionContent = (
    <div className="content-block new-addition">
      <p className="header">
        <PawIcon />
        New Pet?
      </p>
      <p>
        If you've got a new puppy or kitten, we've got a deal for you! Getting a
        new pet is exciting, but between wellness exams, vaccines, and getting
        your little one spayed or neutered, costs can start to add up. The good
        news? We've got you covered! Seriously - it's all included in our Health
        Plan!
      </p>
      <p>You've got enough on your plate. Let our vets take it from here.</p>
      <Link to="health-plans">
        <button className="btn-filled-primary">
          Puppy & Kitten Health Plans
        </button>
      </Link>
    </div>
  );

  const emergencyContent = (
    <div className="content-block emergency">
      <p className="header">
        <ExclamationIcon className="error mb-0" />
        Having an Emergency?
      </p>
      <p className="mt-3 sura font-16">
        Don't hesitate to give us a call during regular business hours. We'll
        help you determine the best path forward.
      </p>
      <a href="tel: 970-663-0218">
        <div className="flex-row-aligned my-4">
          <PhoneIcon style={{ height: "30px" }} />
          <span className="font-16 bold sura">Call us at (970) 663-0218</span>
        </div>
      </a>

      <p className="sura font-16">
        After hours? Call an emergency clinic we trust:
      </p>
      <p className="sura ms-4 mt-2">
        Four Seasons Veterinary Specialists (Loveland):{" "}
        <nobr className="bold">970-800-1106</nobr>
      </p>
      <p className="sura ms-4 mt-2">
        VCA Veterinary Specialists of Northern Colorado (Loveland):{" "}
        <nobr className="bold">970-278-0668</nobr>
      </p>
    </div>
  );

  const couponContent = (
    <Modal show={true} onHide={() => setShowCoupon(false)} size="sm" centered>
      <div className="coupon">
        <p className="header">Free Wellness and Dental Exam</p>
        <p className="details">
          Welcome to Twin Peaks! Use the code below at checkout to get your
          first exam free. We look forward to meeting you!
        </p>
        <div className="code">WELCOME</div>
        <p>*Offer valid for new clients only. Offer valid for 1 pet.</p>
      </div>
    </Modal>
  );

  return (
    <Page
      selectedTab="home"
      className="home"
      title="Twin Peaks Veterinary Clinic | Loveland, CO"
      description="We are a locally owned, innovative veterinary clinic serving Loveland, Berthoud, Johnstown, Milliken and the surrounding area. Now offering a FREE exam to new clients!"
    >
      <Mobile>
        {couponBanner}
        {teaser}
        {introContent}
        {newAdditionContent}
        {emergencyContent}
        {missionContent}
      </Mobile>
      <NotMobile>
        <div className="background-green">
          <div className="container">{couponBanner}</div>
        </div>
        <div className="background-black">
          <div className="container">{teaser}</div>
        </div>
        <div className="d-flex container">
          <div className="d-flex w-50 h-100">{introContent}</div>
          <div className="d-flex w-50 h-100">{newAdditionContent}</div>
        </div>
        <div className="d-flex container">
          <div className="d-flex w-50 h-100">{missionContent}</div>
          <div className="d-flex w-50 h-100">{emergencyContent}</div>
        </div>
      </NotMobile>
      {showCoupon && couponContent}
    </Page>
  );
}

export default Home;
