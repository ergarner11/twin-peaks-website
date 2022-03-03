import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

import Links from "./common/links";
import { Mobile, NotMobile } from "./common/responsive";

import logo from "../assets/logo-light.webp";
import { ReactComponent as BarsIcon } from "../assets/bars.svg";
import { ReactComponent as PhoneIcon } from "../assets/phone.svg";
import { ReactComponent as TimesIcon } from "../assets/times.svg";

import "../styles/components/nav.scss";

function Navbar({ selectedTab }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const links = (
    <div className="nav-tabs">
      <Links selectedTab={selectedTab} social />
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
