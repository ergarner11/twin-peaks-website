import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import carousel1 from "../assets/carousel1.webp";
import carousel2 from "../assets/carousel2.webp";
import carousel3 from "../assets/carousel3.webp";
import newPet from "../assets/newPet.webp";

import Page from "./common/page";
import { Mobile, NotMobile } from "./common/responsive";

import { ReactComponent as ArrowRightIcon } from "../assets/arrow-right.svg";
import { ReactComponent as AwardIcon } from "../assets/award.svg";
import { ReactComponent as HeartIcon } from "../assets/heart.svg";
import { ReactComponent as PawIcon } from "../assets/paw.svg";

import "../styles/components/home.scss";

function Home() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
      ReactGA4.send("pageview");
    }
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
          Locally Owned
        </h1>
        <p>
          Welcome to our Twin Peaks family! Our clinics are locally owned and
          committed to bringing innovative solutions to our clients. In all we
          do, we strive to provide the best care for your dog or cat. From our
          kind and highly-qualified staff to our beautiful, fully-equipped
          clinics, we are confident that you will find many reasons to love us!
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

  return (
    <Page
      selectedTab="home"
      className="home"
      title="Twin Peaks - About Us"
      description="Our locally owned veterinary clinics are committed to providing innovative solutions to serve pets in Northern Colorado."
    >
      <Mobile>{teaser}</Mobile>
      <NotMobile>
        <div className="background-dark-blue">
          <div className="container">{teaser}</div>
        </div>
      </NotMobile>
      {introContent}
      {missionContent}
      {newAdditionContent}
    </Page>
  );
}

export default Home;
