import React from "react";
import { Helmet } from "react-helmet";

import Banner from "../banner";
import Navbar from "../navbar";

import Footer from "./footer";
import { Mobile, NotMobile } from "./responsive";

function Page({ children, ...props }) {
  return (
    <React.Fragment>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Helmet>
      <div className="page">
        <Navbar {...props} />

        <Mobile>
          <React.Fragment>{props.showBanner && <Banner />}</React.Fragment>
        </Mobile>
        <NotMobile>
          <Banner />
        </NotMobile>

        <div
          className={`d-flex flex-column flex-grow-1 background-gray p-0 ${props.className}`}
        >
          {children}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Page;
