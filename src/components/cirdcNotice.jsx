import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";

import Page from "./common/page";
import { Mobile, NotMobile } from "./common/responsive";

import "../styles/components/cirdc-notice.scss";

function CirdcNotice() {
  useEffect(() => {
    ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
    ReactGA4.send("pageview");
  }, []);

  const content = (
    <div className="content">
      <h1 className="mb-3">
        Important Health Notice for Dogs: Contagious Respiratory Disease and
        Canine Influenza Vaccination
      </h1>
      <p className="font-18">
        You should be aware of the increased prevalence of contagious
        respiratory diseases affecting dogs in our region. Reports since August
        2023 from multiple states, including Oregon, Idaho, and California
        indicate its rapid spread.
      </p>

      <section>
        <h2>Clinical Signs and Early Intervention</h2>
        <div className="ms-4">
          <p className="mb-4">
            This disease initially presents with mild signs, such as coughing,
            sneezing, and nasal/eye discharge, but it can progress to severe
            clinical signs, including pneumonia.
          </p>
        </div>
      </section>

      <section>
        <h2>Protective Measures</h2>
        <div className="ms-4">
          <p className="mb-4">
            Since the veterinary medical community has not identified a single
            causative agent in this increase in cases, we are following the
            recommendations from the State Veterinarian of Colorado and CSU to
            vaccinate against key respiratory pathogens. These vaccinations may
            not prevent all respiratory diseases but have shown some indication
            of reducing the severity of clinical signs:
          </p>
          <ul>
            <li>Parainfluenza (included in DAPP)</li>
            <li>Bordetella</li>
            <li>Canine Influenza</li>
          </ul>
          <p className="error">
            Many dogs routinely receive DAPP and Bordetella vaccinations. Given
            the higher incidence of canine respiratory disease cases seen, we
            currently carry the Canine Influenza vaccine.
          </p>
        </div>
      </section>

      <section>
        <h2>Canine Influenza Details</h2>
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
      title="CIRDC Notice"
      description="Important Health Notice for Dogs: Contagious Respiratory Disease and Canine Influenza Vaccination"
      className="service-page cirdc-notice"
    >
      <div className="banner" />
      <Mobile>{content}</Mobile>
      <NotMobile>
        <div className="container">{content}</div>
      </NotMobile>
    </Page>
  );
}
export default CirdcNotice;
