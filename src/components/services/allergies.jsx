import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";

import Page from "../common/page";
import { Mobile, NotMobile } from "../common/responsive";

function Allergies() {
  useEffect(() => {
    ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
    ReactGA4.send("pageview");
  }, []);

  const content = (
    <div className="content">
      <h1 className="mb-3">Allergies</h1>
      <p className="font-18">
        Constant itching and scratching from your pet isn't just annoying to you
        - it's extremely uncomfortable and sometimes even painful for them.
        Allergies can have many causes that may be difficult to sort through
        without the help of a veterinarian.
      </p>
      <section>
        <h2 className="my-3 blue">
          Signs that your pet may be dealing with allergies
        </h2>
        <ul>
          <li>Itchiness</li>
          <li>Constant licking or chewing</li>
          <li>Hives</li>
          <li>Irritated skin</li>
          <li>Frequent ear infections</li>
          <li>Soft stools</li>
        </ul>
      </section>
      <section>
        <h2 className="my-3 blue">Potential causes</h2>
        <ul>
          <li>Fleas</li>
          <li>Environmental allergens</li>
          <li>Food allergy or sensitivity</li>
          <li>An infection in the skin</li>
        </ul>
      </section>
      <section>
        <h2 className="my-3 blue">Getting things under control</h2>
        <p>
          When it comes to treating allergies in pets, there are a number of
          different options. The most important thing you can do is to start the
          treatment process as soon as possible. As with many conditions, early
          intervention can prevent much more severe problems down the road.
          Misguided attempts may actually make things worse, so getting to the
          root is critical. Our vets will help you through this process and make
          recommendations specific to your pet's needs. Together, we can stop
          the itch!
        </p>
      </section>
    </div>
  );

  return (
    <Page
      selectedTab="services"
      title="Allergies"
      description="Allergies can have many causes. Our veterinarians will make recommendations specific to your pet's needs and help you stop the itch!"
      className="service-page allergies"
    >
      <div className="banner" />
      <Mobile>{content}</Mobile>
      <NotMobile>
        <div className="container">{content}</div>
      </NotMobile>
    </Page>
  );
}
export default Allergies;
