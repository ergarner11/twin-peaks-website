import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";

import Page from "../common/page";
import { Mobile, NotMobile } from "../common/responsive";

function CIRDC() {
  useEffect(() => {
    ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
    ReactGA4.send("pageview");
  }, []);

  const content = (
    <div className="content">
      <h1 className="mb-3">
        Canine Infectious Respiratory Disease Complex (CIRDC)
      </h1>
      <p className="font-18">
        Canine Infectious Respiratory Disease Complex (CIRDC) is a broad term
        encompassing highly contagious respiratory illnesses and infections.
        These illnesses and infections are more commonly contracted at places
        like kennels, boarding facilities, dog parks, and other places where
        dogs gather. Various bacteria and viruses can contribute to this
        illness.
      </p>

      <section>
        <h2 className="my-3 blue">At-Risk Populations</h2>
        <p>
          Dogs most vulnerable include young dogs, those with compromised immune
          systems, and dogs in close contact with large populations of other
          dogs.
        </p>
      </section>

      <section>
        <h2 className="my-3 blue">Clinical Signs</h2>
        <p>
          Common clinical signs include mild lethargy and a dry cough. The
          illness is usually self-limiting and resolves within 7-10 days.
        </p>
      </section>

      <section>
        <h2 className="my-3 blue">Preventive Measures</h2>
        <p>
          Vaccinations play a key role in prevention. Recommended vaccines
          include:
        </p>
        <ul className="mt-2">
          <li>Parainfluenza (included in DAPP)</li>
          <li>Bordetella</li>
          <li>
            Canine Influenza (Currently recommended due to the increased number
            of canine respiratory disease cases seen since August 2023)
          </li>
        </ul>
      </section>

      <section>
        <h2>Pricing</h2>
        <div className="ms-4">
          <p className="mb-4">
            Dogs will need two Canine Influenza vaccines, administered three
            weeks apart. Full protection is achieved at least two weeks after
            the second vaccine.
          </p>
          <table>
            <thead>
              <tr>
                <th className="service">Vaccine</th>
                <th className="price">Retail Price</th>
                <th className="price">50% Health Plan</th>
                <th className="price">90% Health Plan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="service">DAPP</td>
                <td className="price">$30</td>
                <td className="price">$0</td>
                <td className="price">$0</td>
              </tr>
              <tr>
                <td className="service">Bordetella</td>
                <td className="price">$30</td>
                <td className="price">$0</td>
                <td className="price">$0</td>
              </tr>
              <tr>
                <td className="service">
                  Canine Influenza <br />
                  (2 doses needed)
                </td>
                <td className="price">$50</td>
                <td className="price">$25</td>
                <td className="price">$5</td>
              </tr>
            </tbody>
          </table>
          <p className="mb-4 bold">
            *An Office Visit is required in addition to the cost of the
            individual vaccine ($20 for Health Plan patients, $30-$50 for
            Non-Health Plan patients)
          </p>
        </div>
      </section>
      <h2 className="font-18">Schedule your visit today!</h2>
    </div>
  );

  return (
    <Page
      selectedTab="services"
      title="CIRDC"
      description="Canine Infectious Respiratory Disease Complex (CIRDC) is a is a broad term encompassing highly contagious respiratory illnesses and infections"
      className="service-page cirdc"
    >
      <div className="banner" />
      <Mobile>{content}</Mobile>
      <NotMobile>
        <div className="container">{content}</div>
      </NotMobile>
    </Page>
  );
}
export default CIRDC;
