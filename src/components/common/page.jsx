import React from "react";

import Banner from "../banner";
import Navbar from "../navbar";

function Page({ children, ...props }) {
  return (
    <div className="page">
      <Navbar {...props} />
      <Banner />
      <div
        className={`d-flex flex-column flex-grow-1 background-gray p-0 ${props.className}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Page;
