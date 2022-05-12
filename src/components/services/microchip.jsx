import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";

import Page from "../common/page";
import { Mobile, NotMobile } from "../common/responsive";

function Microchip() {
  useEffect(() => {
    ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
    ReactGA4.send("pageview");
  }, []);

  const content = (
    <div className="content">
      <h1 className="mb-3">Microchip</h1>
      <p className="font-18">
        Getting your pet microchipped is a small thing, but it can make all the
        difference when your little one is lost. Some owners rely entirely on a
        collar with id tags in the case of a separation. While this is extremely
        important, it is not the only line of defense your pet needs. Collars
        and tags can be lost or damaged, but a microchip is guaranteed to stay
        with them wherever they go!
      </p>
      <section>
        <h2 className="my-3 blue">What is a microchip?</h2>
        <p>
          A microchip is a tiny device placed under your pet's skin. It is
          approximately the size of a grain of rice, and it contains a unique
          number that can be used to identify a pet. When someone finds a pet
          that is lost, a universal microchip scanner can be used to retrieve
          information about the animal and ensure a happy reunion.
        </p>
      </section>
      <section>
        <h2 className="my-3 blue">Registration</h2>
        <p>
          Microchips only contain the unique identification number of your pet
          (not your information). Therefore, in order for them to be effective,
          you must associate your pet's microchip with your contact information
          through an online registration process.
        </p>
        <section className="ms-4">
          <h3>How do I register a microchip?</h3>
          <p className="ms-4">
            You can register your microchip for free{" "}
            <a
              href="https://microchipregistry.foundanimals.org"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            {". "}
            Remember to keep your contact information up to date!
          </p>
        </section>
        <section className="ms-4">
          <h3>Has my pet's microchip been registered?</h3>
          <p className="ms-4">
            The American Animal Hospital Association has a{" "}
            <a
              href="https://www.aaha.org/your-pet/pet-microchip-lookup/microchip-search/"
              target="_blank"
              rel="noreferrer"
            >
              microchip lookup
            </a>{" "}
            service that you can use to determine whether or not your microchip
            has been properly registered. You'll just need to provide the
            microchip ID number
          </p>
        </section>
      </section>
    </div>
  );

  return (
    <Page
      title="Microchip"
      description="Getting your pet microchipped is the best thing you can do to ensure a happy reunion when your pet is lost"
      className="service-page microchip"
    >
      <div className="banner" />
      <Mobile>{content}</Mobile>
      <NotMobile>
        <div className="container">{content}</div>
      </NotMobile>
    </Page>
  );
}
export default Microchip;
