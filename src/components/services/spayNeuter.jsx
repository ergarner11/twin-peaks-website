import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";

import Page from "../common/page";
import { Mobile, NotMobile } from "../common/responsive";

function SpayNeuter() {
  useEffect(() => {
    ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
    ReactGA4.send("pageview");
  }, []);

  const content = (
    <div className="content">
      <h1 className="mb-3">Spay & Neuter Surgery</h1>
      <p className="font-18">
        Did you know that having your pet spayed or neutered isn't just about
        population control? There are actually a number of health and behavioral
        benefits associated with these procedures.
      </p>
      <section>
        <h2 className="blue">Reasons to get your pet spayed or neutered</h2>
        <ul>
          <li>Increases the lifespan of your pet</li>
          <li>
            Greatly reduces or eliminates risk of certain diseases, such as
            uterine, ovarian, and testicular cancer
          </li>
          <li>Decreases aggression and other unwanted behaviors</li>
          <li>Stops females from going into heat</li>
          <li>Prevents unwanted litters</li>
        </ul>
      </section>
      <section>
        <h2 className="blue">About the procedure</h2>
        <p>
          We perform all spay and neuter surgeries under general anesthesia.
          Prior to beginning the surgery, your pet will be screened to make sure
          they are a good candidate for anesthesia. Throughout the entire
          procedure, they will be closely monitored by our highly trained
          doctors and veterinarians .
        </p>
        <p>
          During the procedure, the ovaries and uterus (spay) or testicles
          (neuter) are removed from the pet to prevent future reproduction.
        </p>
      </section>
      <p className="font-18 bold">
        The appropriate age to have your pet spayed or neutered depends on a few
        factors, including age, breed, and species. Give us a call today to find
        out when your pet is ready to take this step!
      </p>
    </div>
  );

  return (
    <Page
      title="Spay & Neuter Surgery"
      description="There are a number of health and behavioral benefits associated with having your pet spayed or neutered."
      className="service-page spay-neuter"
    >
      <div className="banner" />
      <Mobile>{content}</Mobile>
      <NotMobile>
        <div className="container">{content}</div>
      </NotMobile>
    </Page>
  );
}
export default SpayNeuter;
