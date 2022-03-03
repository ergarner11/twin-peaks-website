import React from "react";

import { ReactComponent as MapIcon } from "../../assets/map-marker-alt.svg";

import "../../styles/components/common/address.scss";

function Address({ darkmode }) {
  const modeClass = darkmode ? "white" : "";

  return (
    <div
      className="address"
      onClick={() => window.open("https://goo.gl/maps/5ghat8LjDvdBo7wC6")}
    >
      <MapIcon className={modeClass} />
      <div>
        <p className={modeClass}>4007 S Lincoln Ave, Suite 470</p>
        <p className={modeClass}>Loveland, CO 80537</p>
      </div>
    </div>
  );
}

export default Address;
