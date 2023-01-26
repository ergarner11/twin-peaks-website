import React from "react";

import Address from "./address";
import Hours from "./hours";
import Phone from "./phone";
import Links from "./links";
import RequestAppointment from "./requestAppointment";
//import RequestRefill from "./requestRefill";
import Social from "./social";
import { Desktop, Mobile, NotMobile } from "./responsive";

import "../../styles/components/common/footer.scss";

function Footer() {
  const nav = (
    <nav>
      <div className="d-flex flex-column nav-tabs">
        <Links />
      </div>
    </nav>
  );

  return (
    <div className="footer">
      <div className="container">
        <Mobile>
          <div className="mobile">
            <Address darkmode />
            <Phone darkmode />
            <Hours darkmode />
            <Social darkmode />
            <RequestAppointment darkmode />
            {/*<RequestRefill darkmode />*/}
            {nav}
          </div>
        </Mobile>
        <NotMobile>
          <div className="not-mobile">
            <div className="section-1">
              <Address darkmode />
              <Phone darkmode />
              <Social darkmode />
            </div>
            <Hours darkmode expanded />
            <Desktop>
              <div className="section-3">
                <RequestAppointment darkmode />
                {/*<RequestRefill darkmode />*/}
              </div>
            </Desktop>
            {nav}
          </div>
        </NotMobile>
        <div className="legal">
          <p>Copyright © 2022 Twin Peaks Veterinary Clinic</p>
          <div className="documents">
            <a
              href="https://app.termly.io/document/privacy-policy/774c8f02-ba40-4d34-985c-72f884509f6e"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="https://app.termly.io/document/terms-of-use-for-website/95e1bcd1-b1af-4d01-b6b5-4320929fd69e"
              target="_blank"
              rel="noreferrer"
            >
              Terms of Use
            </a>
            <span>|</span>
            <a
              href="https://app.termly.io/document/disclaimer/e0eb5565-f841-4248-b6bb-066b783d81eb"
              target="_blank"
              rel="noreferrer"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
