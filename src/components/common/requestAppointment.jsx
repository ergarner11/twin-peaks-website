import React from "react";

import { ReactComponent as CalendarIcon } from "../../assets/calendar-icon.svg";

function RequestAppointment({ darkmode }) {
  return (
    <button
      className={`w-100 ${
        darkmode ? "btn-filled-primary" : "btn-rounded-primary"
      }`}
      onClick={() =>
        window.open(
          "https://connect.allydvm.com/practice/twinpeaksvc/appointment_request"
        )
      }
    >
      <CalendarIcon />
      Request Appointment
    </button>
  );
}

export default RequestAppointment;
