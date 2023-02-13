import React from "react";

import { ReactComponent as PrescriptionIcon } from "../../assets/prescription-icon.svg";

function RequestRefill({ darkmode }) {
  return (
    <button
      className={`w-100 ${
        darkmode ? "btn-filled-tertiary" : "btn-rounded-primary"
      }`}
      onClick={() =>
        window.open(
          "https://connect.allydvm.com/practice/twinpeaksvc/refill_request"
        )
      }
    >
      <PrescriptionIcon />
      Refill Prescription
    </button>
  );
}

export default RequestRefill;
