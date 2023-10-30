import React from "react";

import { ReactComponent as ClockIcon } from "../../assets/clock.svg";

function Hours({ darkmode, expanded }) {
  const modeClass = darkmode ? "white" : "";
  const className = `heading-font ${modeClass}`;

  return (
    <div>
      <div className="d-flex">
        <ClockIcon
          className={`me-3 ${expanded ? "mt-2" : "mt-3"} ${className}`}
        />
        <div>
          {expanded && (
            <React.Fragment>
              <p className={className}>Monday: 8am - 6pm</p>
              <p className={className}>Tuesday: 8am - 6pm</p>
              <p className={className}>Wednesday: 8am - 6pm</p>
              <p className={className}>Thursday: 8am - 6pm</p>
              <p className={className}>Friday: 8am - 6pm</p>
            </React.Fragment>
          )}
          {!expanded && <p className={className}>Monday - Friday: 8am - 6pm</p>}
          <p className={className}>Saturday: 8am - 5pm</p>
          <p className={className}>Sunday: Closed</p>
          <br />
          <p className={className}>Thanksgiving (11/23): Closed</p>
          <p className={className}>Christmas (12/25): Closed</p>
          <p className={className}>New Year's Day (1/1): Closed</p>
        </div>
      </div>
    </div>
  );
}

export default Hours;
