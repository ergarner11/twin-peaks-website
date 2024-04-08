import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA4 from "react-ga4";

import Page from "../common/page";
import { Mobile, NotMobile } from "../common/responsive";

function TPLO() {
  useEffect(() => {
    ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
    ReactGA4.send("pageview");
  }, []);

  const content = (
    <div className="content">
      <h1 className="mb-3">TPLO Surgery - Tibial Plateau Leveling Osteotomy</h1>
      <p className="font-18">
        Similar to the Anterior Cruciate Ligament (ACL) in humans, dogs have a
        Cranial Cruciate Ligament (CCL) that stabilizes the knee joint. When
        this ligament is ruptured/torn or otherwise injured, your dog's mobility
        can be significantly affected. Tibial Plateau Leveling Osteotomy (TPLO)
        is the corrective surgery for CCL injuries.
      </p>
      <section>
        <h2 className="my-3">
          If your dog needs TPLO surgery, here's what's next:
        </h2>
        <section className="ms-4 my-2">
          <h3>Step 1: Diagnosis and Consultation</h3>
          <section className="ms-4 my-0">
            <p>
              Meet with one of our veterinarians to confirm CCL injury. In most
              cases, this process will involve taking X-rays to determine the
              extent of the injury. We will answer any questions, discuss
              opions, and prepare you for your next steps.
            </p>
            <p>
              If your dog has already been diagnosed with an injury requiring
              TPLO surgery, we may not need to repeat diagnostics or X-rays
              performed elsewhere.
            </p>
          </section>
          <h3>Step 2: TPLO Surgery</h3>
          <section className="ms-4 my-0">
            <p>
              We partner with Synergy Surgical to perform TPLO surgeries in our
              clinic.
            </p>
          </section>
          <h3>Step 3: Postoperative Rechecks</h3>
          <section className="ms-4 my-0">
            <p>
              Full recovery from TPLO surgery takes approximately 3 months. We
              will work with you to make sure you understand which activities
              are appropriate for your dog at each phase of recovery.
            </p>
            <p>
              In addition to at-home care, you should plan for check-ups with
              one of our veterinarians at 2 weeks, 4 weeks, and 10 to 12 weeks
              after surgery. We will take X-rays at the final appointment to
              make sure the bone is healing properly and there are no issues
              with the metal implants.
            </p>
          </section>
        </section>
      </section>
      <section>
        <h2 className="my-3">Pricing</h2>
        <section className="ms-4 my-0">
          <p>
            Our TPLO surgery packages are charged at a competitive flat rate
            with no confusing estimates or surprises! Your surgery fee includes
            bloodwork, a pain management injection, and medications to go home.
          </p>
          <section className="ms-4 my-3">
            <table style={{ maxWidth: "400px" }}>
              <thead>
                <tr>
                  <td className="bold">Weight</td>
                  <td className="bold">One Knee</td>
                  <td className="bold">Both Knees</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&lt; 90 lbs</td>
                  <td>$3,100</td>
                  <td>$5,100</td>
                </tr>
                <tr>
                  <td>90 - 120 lbs</td>
                  <td>$3,200</td>
                  <td>$5,300</td>
                </tr>
                <tr>
                  <td>120 - 150 lbs</td>
                  <td>$3,300</td>
                  <td>$5,500</td>
                </tr>
                <tr>
                  <td>&gt; 150 lbs</td>
                  <td>$3,500</td>
                  <td>$5,900</td>
                </tr>
              </tbody>
            </table>
          </section>
          <p className="mt-4">
            All medications prescribed and services performed before, after, or
            in addition to the TPLO surgery will be provided by Twin Peaks
            veterinarians at our regular clinic prices. Our{" "}
            <Link to="/health-plans">Health Plan memberships</Link> provide
            significant savings on these services!
          </p>
        </section>
      </section>
      <h2>Get Started Today</h2>
      <p>
        Wherever you are in the process of dealing with an CCL injury, we can
        help on the path to healing.
      </p>
    </div>
  );

  return (
    <Page
      title="TPLO Surgery"
      description="We offer TPLO surgery packages at competitive flat rate prices. If you're dealing with a CCL injury, we can help!"
      className="service-page tplo"
    >
      <div className="banner" />
      <Mobile>{content}</Mobile>
      <NotMobile>
        <div className="container">{content}</div>
      </NotMobile>
    </Page>
  );
}
export default TPLO;
