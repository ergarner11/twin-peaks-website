import React from "react";

import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";
import { ReactComponent as GoogleIcon } from "../../assets/google.svg";

function Social({ darkmode }) {
  const modeClass = darkmode ? "white" : "";

  return (
    <div className="social flex-row-aligned">
      <span
        className={modeClass}
        onClick={() =>
          window.open("https://www.facebook.com/TwinPeaksVetClinic")
        }
      >
        <FacebookIcon className="pointer" style={{ width: "20px" }} />
      </span>
      <span
        className={`ms-3 ${modeClass}`}
        onClick={() =>
          window.open(
            "https://search.google.com/local/writereview?placeid=ChIJo6oJkItUaYcRN5UHG3R7kZM"
          )
        }
      >
        <GoogleIcon className="pointer" style={{ width: "20px" }} />
      </span>
    </div>
  );
}

export default Social;
