import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";

import Page from "../common/page";
import { Mobile, NotMobile } from "../common/responsive";

import "../../styles/components/services.scss";

function Diagnostics() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
      ReactGA4.send("pageview");
    }
  }, []);

  const content = (
    <div className="content">
      <h1 className="mb-3">Diagnostics</h1>
      <p className="font-18">
        There are many reasons that your pet may not be feeling well, and
        getting to the root of the problem is the first step to resolving it.
        Our doctors use reliable and modern equipment and tests to get you
        answers as soon as possible!
      </p>
      <section>
        <h2 className="blue">Radiography (X-rays)</h2>
        <p>
          X-rays are a very useful and noninvasive way to get insight into your
          pet's condition. We are proud to offer in-house digital radiography,
          allowing our doctors to see x-ray results almost instantly. X-rays may
          be used to help diagnose many conditions, including:
        </p>
        <ul className="mt-2">
          <li>Broken bones</li>
          <li>An object that was swallowed</li>
          <li>Tumors or masses</li>
          <li>Bladder/kidney stones</li>
        </ul>
      </section>
      <section>
        <h2 className="blue">Laboratory and Bloodwork</h2>
        <p>
          We offer many in-house lab and blood tests to assist in the diagnostic
          process. Some of the most common include:
        </p>
        <ul className="mt-2">
          <li>CBC (Complete Blood Count) bloodwork</li>
          <li>Blood chemistry panel</li>
          <li>Fecal/Stool tests</li>
          <li>Urinalysis</li>
          <li>Tests for specific diseases, such as Heartworm or Parvovirus</li>
        </ul>
      </section>
      <p className="font-18">
        If your little one is under the weather, let's start now to get them
        feeling better!
      </p>
    </div>
  );

  return (
    <Page
      selectedTab="services"
      selectedLevel2="diagnostics"
      title="Diagnostics"
      description="There are many reasons that your pet may not being feeling well. Our doctors use reliable and modern equipment and tests to get you answers as soon as possible!"
      className="service-page diagnostics"
    >
      <Mobile>{content}</Mobile>
      <NotMobile>
        <div className="container">{content}</div>
      </NotMobile>
    </Page>
  );
}
export default Diagnostics;
