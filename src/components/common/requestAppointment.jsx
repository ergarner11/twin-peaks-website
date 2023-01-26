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
          "https://prodinternal.vettersoftware.com/view/onlinebook/index.html?identifier=kklIsm9Rj%2BxfFydtdUctgs0jn0ckLCP65ob6U65WhaVKPvhUjRpNBzmuvKMOPhqBBhCaDPRx148wnOs7Mi0qRQZo8C%2BDbDqMWnzcvZ%2FyhqQ%3D"
        )
      }
    >
      <CalendarIcon />
      Request Appointment
    </button>
  );
}

export default RequestAppointment;
