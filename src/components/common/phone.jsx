import React from "react";

import { ReactComponent as PhoneIcon } from "../../assets/phone.svg";

import "../../styles/components/common/phone.scss";

function Phone({ darkmode }) {
  const modeClass = darkmode ? "white" : "";

  return (
    <a href="tel: 970-663-0218">
      <div className="phone">
        <PhoneIcon className={modeClass} />
        <p className={modeClass}>Call or Text: 970-663-0218</p>
      </div>
    </a>
  );
}

export default Phone;
