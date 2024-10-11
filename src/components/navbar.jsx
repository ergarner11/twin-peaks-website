import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { Link } from "react-router-dom";
import "../styles/react-popper-tooltip.css";

import { Mobile, NotMobile } from "./common/responsive";

import { ReactComponent as LessIcon } from "../assets/less.svg";
import { ReactComponent as MoreIcon } from "../assets/more.svg";

import logo from "../assets/logo-twin-peaks-light.png";

import { ReactComponent as BarsIcon } from "../assets/bars.svg";
import { ReactComponent as TimesIcon } from "../assets/times.svg";

import "../styles/components/nav.scss";

function Navbar({ selectedTab, selectedCategory, selectedLevel2 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandCategory, setExpandCategory] = useState(selectedTab);

  const nav1Links = (
    <React.Fragment>
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
        <span className="flex-row-aligned">Client Portal</span>
      </div>
      <button
        className="btn-filled-secondary ms-2"
        onClick={() =>
          window.open(
            "https://connect.allydvm.com/practice/twinpeaksvc/refill_request"
          )
        }
      >
        Request Refill
      </button>
    </React.Fragment>
  );

  const nav2Links = (
    <div className="nav-tabs">
      <ul>
        <Tab
          tabText="Locations"
          selectedTab={selectedTab}
          selectedTabMatch="locations"
          selectedLevel2={selectedLevel2}
          expandCategory={expandCategory}
          handleClick={() =>
            setExpandCategory(expandCategory ? "" : "locations")
          }
          submenuConfig={[
            {
              level2Match: "evans",
              pageLink: "/locations/evans",
              linkText: "Evans - Dental & Surgery",
            },
            {
              level2Match: "loveland",
              pageLink: "/locations/loveland",
              linkText: "Loveland - General Practice",
            },
          ]}
        />
        <li
          className={
            "nav-tab" +
            (selectedTab === "home" && !selectedCategory ? " selected" : "")
          }
        >
          <Link to="/">
            <span className="tab-content">Home</span>
          </Link>
        </li>
        <Tab
          tabText="Services"
          selectedTab={selectedTab}
          selectedTabMatch="services"
          selectedLevel2={selectedLevel2}
          expandCategory={expandCategory}
          handleClick={() =>
            setExpandCategory(expandCategory ? "" : "services")
          }
          submenuConfig={[
            {
              level2Match: "allergies",
              pageLink: "/services/allergies",
              linkText: "Allergies",
            },
            {
              level2Match: "dentistry",
              pageLink: "/services/dentistry",
              linkText: "Dentistry",
            },
            {
              level2Match: "diagnostics",
              pageLink: "/services/diagnostics",
              linkText: "Diagnostics",
            },
            {
              level2Match: "microchip",
              pageLink: "/services/microchip",
              linkText: "Microchip",
            },
            {
              level2Match: "spay-neuter",
              pageLink: "/services/spay-neuter",
              linkText: "Spay & Neuter",
            },
            {
              level2Match: "tplo",
              pageLink: "/services/tplo-surgery",
              linkText: "TPLO",
            },
            {
              level2Match: "vaccines",
              pageLink: "/services/vaccines",
              linkText: "Vaccines",
            },
            {
              level2Match: "wellness",
              pageLink: "/services/wellness",
              linkText: "Wellness",
            },
          ]}
        />
        <li
          className={
            "nav-tab" +
            (selectedTab === "healthPlans" && !selectedCategory
              ? " selected"
              : "")
          }
        >
          <Link to="/health-plans">
            <span className="tab-content">Health Plans</span>
          </Link>
        </li>
        <li
          className={
            "nav-tab" +
            (selectedTab === "ourTeam" && !selectedCategory ? " selected" : "")
          }
        >
          <Link to="/our-team">
            <span className="tab-content">Our Team</span>
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <React.Fragment>
      <Mobile>
        <nav className="background-dark-blue">
          <div className="d-flex p-3 align-items-center justify-content-between">
            <div className="white" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded && <TimesIcon />}
              {!isExpanded && <BarsIcon />}
            </div>
            <img src={logo} className="pe-2" alt="Twin Peaks logo" />
          </div>
          <Collapse in={isExpanded}>{nav2Links}</Collapse>
        </nav>
      </Mobile>
      <NotMobile>
        <nav className="nav-1 container-fluid d-flex flex-row justify-content-center">
          <div className="nav-content flex-row-aligned justify-content-between flex-grow-1">
            <img
              src={logo}
              className="align-self-center"
              alt="Twin Peaks logo"
            />
            <div className="nav-tabs">{nav1Links}</div>
          </div>
        </nav>
        <nav className="nav-2 container-fluid d-flex flex-row justify-content-center">
          <div className="nav-content flex-row-aligned justify-content-center flex-grow-1">
            {nav2Links}
          </div>
        </nav>
      </NotMobile>
    </React.Fragment>
  );
}

function Tab({
  tabText,
  tabLink,
  selectedTab,
  selectedTabMatch,
  selectedLevel2,
  expandCategory,
  handleClick,
  submenuConfig,
}) {
  return (
    <React.Fragment>
      <Mobile>
        <li
          className={
            "nav-tab no-hover-underline" +
            (selectedTab === selectedTabMatch && !selectedLevel2
              ? " selected"
              : "")
          }
          onClick={handleClick}
        >
          <span className="tab-content">
            {expandCategory !== selectedTabMatch && <MoreIcon />}
            {expandCategory === selectedTabMatch && <LessIcon />}
            {tabText}
          </span>
        </li>
        {expandCategory === selectedTabMatch && (
          <Submenu
            selectedLevel2={selectedLevel2}
            submenuConfig={submenuConfig}
          />
        )}
      </Mobile>
      <NotMobile>
        <li
          className={
            "nav-tab no-hover-underline" +
            (selectedTab === selectedTabMatch ? " selected" : "")
          }
        >
          {tabLink && (
            <Link to={`/${tabLink}`}>
              <span className="tab-content">{tabText}</span>
            </Link>
          )}
          {!tabLink && <span className="tab-content">{tabText}</span>}
          <Submenu
            selectedLevel2={selectedLevel2}
            submenuConfig={submenuConfig}
          />
        </li>
      </NotMobile>
    </React.Fragment>
  );
}

function Submenu({ selectedLevel2, submenuConfig }) {
  return (
    <div className="nav-tabs">
      <ul className="submenu">
        {submenuConfig.map((t, i) => (
          <SubmenuLink key={i} selectedLevel2={selectedLevel2} config={t} />
        ))}
      </ul>
    </div>
  );
}

function SubmenuLink({ selectedLevel2, config }) {
  return (
    <li
      className={
        "nav-tab level-2" +
        (selectedLevel2 === config.level2Match ? " selected" : "")
      }
    >
      <Link to={config.pageLink}>
        <span className="tab-content">{config.linkText}</span>
      </Link>
    </li>
  );
}

export default Navbar;
