import React from "react";
import { Link } from "react-router-dom";

import Social from "./social";
import { Mobile, NotMobile } from "./responsive";

import { ReactComponent as UserIcon } from "../../assets/user-icon.svg";

function Links({ selectedTab, social }) {
  return (
    <React.Fragment>
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
      </Link>
      <Link
        to="/services"
        className={"nav-tab" + (selectedTab === "services" ? " selected" : "")}
      >
        <span>Services</span>
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
      {social && (
        <React.Fragment>
          <Mobile>
            <div className="d-flex justify-content-center my-4">
              <Social />
            </div>
          </Mobile>
          <NotMobile>
            <div className="ms-4">
              <Social />
            </div>
          </NotMobile>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Links;
