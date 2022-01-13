import React, { useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";

import { Mobile, NotMobile } from "./common/responsive";

import logo from "../assets/logo-light.webp";
import { ReactComponent as BarsIcon } from "../assets/bars.svg";
import { ReactComponent as PhoneIcon } from "../assets/phone.svg";
import { ReactComponent as TimesIcon } from "../assets/times.svg";
import { ReactComponent as UserIcon } from "../assets/user-icon.svg";

import "../styles/components/nav.scss";

function Navbar({ selectedTab }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const links = (
    <div className="nav-tabs">
      <Link
        to="/"
        className={"nav-tab" + (selectedTab === "home" ? " selected" : "")}
      >
        <span>Home</span>
      </Link>
      {/*<Link
        to="/pricing"
        className={"nav-tab" + (selectedTab === "pricing" ? " selected" : "")}
      >
        <span>Pricing</span>
      </Link>*/}
      <Link
        to="/health-plans"
        className={
          "nav-tab" + (selectedTab === "healthPlans" ? " selected" : "")
        }
      >
        <span>Health Plans</span>
      </Link>
      <Link
        to="/our-team"
        className={"nav-tab" + (selectedTab === "ourTeam" ? " selected" : "")}
      >
        <span>Our Team</span>
      </Link>
      <div
        className="nav-tab"
        onClick={() =>
          window.open(
            "http://twinpeaksvetclinic.vetsourceweb.com/site/view/149471_HomeDelivery.pml?retUrl=https://www.twinpeaksvetclinic.com/"
          )
        }
      >
        <span>Shop</span>
      </div>
      <div
        className="nav-tab"
        onClick={() =>
          window.open(
            "https://www.carecredit.com/go/TCP659/B3CALAdToolkitANCardVeterinary"
          )
        }
      >
        <span>CareCredit</span>
      </div>
      <div
        className="nav-tab"
        onClick={() => window.open("https://portal.twinpeaksvetclinic.com")}
      >
        <span className="flex-row-aligned">
          <UserIcon className="pt-1" />
          Health Plan Portal
        </span>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Mobile>
        <nav>
          <div className="d-flex p-3 justify-content-between align-items-center">
            <div className="white" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded && <TimesIcon />}
              {!isExpanded && <BarsIcon />}
            </div>
            <img
              src={logo}
              width="100px"
              height="72px"
              className="align-self-center"
              alt="Twin Peaks Veterinary Clinic logo"
            />

            <a href="tel: 970-663-0218">
              <PhoneIcon />
            </a>
          </div>
          <Collapse in={isExpanded}>{links}</Collapse>
        </nav>
      </Mobile>
      <NotMobile>
        <nav className="container-fluid d-flex flex-row justify-content-center">
          <div className="nav-content flex-row-aligned justify-content-center flex-grow-1">
            {links}
          </div>
        </nav>
      </NotMobile>
    </React.Fragment>
  );
}

export default Navbar;
