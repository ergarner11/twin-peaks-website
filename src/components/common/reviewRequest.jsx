import React from "react";

import { ReactComponent as GoogleIcon } from "../../assets/google.svg";

function ReviewRequest({ darkmode }) {
  return (
    <button
      className={`w-100 ${
        darkmode ? "btn-filled-primary" : "btn-rounded-primary"
      }`}
      onClick={() =>
        window.open(
          "https://search.google.com/local/writereview?placeid=ChIJo6oJkItUaYcRN5UHG3R7kZM"
        )
      }
    >
      <GoogleIcon />
      Leave Us a Review
    </button>
  );
}

export default ReviewRequest;
