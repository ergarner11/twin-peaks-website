import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import carousel1 from "../assets/carousel1.webp";
import carousel2 from "../assets/carousel2.webp";
import carousel3 from "../assets/carousel3.webp";
import logo from "../assets/logo-dark.webp";
import newPet from "../assets/newPet.webp";

import Page from "./common/page";
import { Mobile, NotMobile } from "./common/responsive";

import { ReactComponent as ArrowRightIcon } from "../assets/arrow-right.svg";
import { ReactComponent as AwardIcon } from "../assets/award.svg";
import { ReactComponent as ClockIcon } from "../assets/clock.svg";
import { ReactComponent as HeartIcon } from "../assets/heart.svg";
import { ReactComponent as HospitalIcon } from "../assets/hospital.svg";
import { ReactComponent as PawIcon } from "../assets/paw.svg";
import { ReactComponent as PhoneIcon } from "../assets/phone.svg";

import "../styles/components/home.scss";

function Home() {
  useEffect(() => {
    ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
    ReactGA4.send("pageview");
  }, []);

  const teaser = (
    <div className="teaser">
      <div className="section-1">
        <p className="header">Need Care? Our Health Plans Can Help</p>
        <p className="subtext">
          1 in 3 pets need unexpected veterinary care each year. When it
          happens, we want the focus to be on your pet, not on your finances
        </p>
        <Link to="health-plans">
          <button className="btn-rounded-tertiary">
            <ArrowRightIcon />
            About our Health Plans
          </button>
        </Link>
      </div>
      <div className="section-2">
        <Carousel>
          <Carousel.Item>
            <img src={carousel1} alt="Two small dogs running" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carousel2} alt="Cat relaxing on a couch" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carousel3} alt="A dog and cat snuggling" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );

  const introContent = (
    <div className="content-container intro">
      <div className="content-block">
        <h1 className="header">
          <AwardIcon />
          Locally Owned Loveland Vet Clinic!
        </h1>
        <p>
          Welcome to our Twin Peaks family! We are a locally owned, innovative
          veterinary clinic located in Loveland, CO. In all we do, we strive to
          provide the best care for your dog or cat. From our caring and
          highly-qualified staff to our beautiful fully-equipped clinic, we are
          confident that you will find many reasons to love us!
        </p>
        <p>
          We're conveniently located to serve Loveland, Berthoud, Johnstown,
          Milliken and the surrounding area.
        </p>
      </div>
    </div>
  );

  const missionContent = (
    <div className="content-container mission">
      <div className="layer">
        <div className="content-block">
          <h2 className="header">
            <HeartIcon />
            Our Mission
          </h2>
          <p>
            Twin Peaks was built on the idea that high quality veterinary care
            should be accessible to everyone. We know that tight finances
            prevent far too many pets from getting the care they need, and we're
            working hard to provide affordable solutions. Our Health Plans,
            which are central to our mission, are{" "}
            <span className="bold">
              specifically designed to reduce financial barriers for pet
              parents.
            </span>
          </p>
        </div>
      </div>
    </div>
  );

  const newAdditionContent = (
    <div className="content-container new-addition">
      <div className="content-block">
        <div className="d-flex">
          <div className="section-1">
            <h2 className="header">
              <PawIcon />
              New Pet?
            </h2>
            <p>
              If you've got a new puppy or kitten, we've got a deal for you!
              Getting a new pet is exciting, but between all the wellness exams
              and vaccines, costs can start to add up. The good news? We've got
              you covered! Seriously - it's all included in our Health Plan!
            </p>
            <p>
              You've got enough on your plate. Let our vets take it from here.
            </p>
            <Link to="health-plans">
              <button className="btn-filled-primary">Learn More</button>
            </Link>
          </div>
          <div className="section-2">
            <img src={newPet} alt="Dog holding a stuffed animal in his mouth" />
          </div>
        </div>
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
                <span className="font-18 bold">Call us at (970) 663-0218</span>
              </div>
            </a>
            <NotMobile>
              <img
                src={logo}
                alt="Twin Peaks Vet Clinic logo"
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
      showBanner
      selectedTab="home"
      className="home"
      title="Twin Peaks Veterinary Clinic | Loveland, CO"
      description="Now offering a FREE exam to new clients! We are a locally owned, innovative veterinary clinic serving Loveland, Berthoud, Johnstown, Milliken and the surrounding area."
    >
      <Mobile>{teaser}</Mobile>
      <NotMobile>
        <div className="background-black">
          <div className="container">{teaser}</div>
        </div>
      </NotMobile>
      {introContent}
      {newAdditionContent}
      {missionContent}
      {emergencyContent}
      {googleMap}
    </Page>
  );
}

export default Home;
