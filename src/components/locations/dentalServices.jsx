import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactGA4 from "react-ga4";

import EvansBanner from "./evansBanner";

import Page from "../common/page";
import { Mobile, NotMobile } from "../common/responsive";

import "../../styles/components/locations.scss";
import "../../styles/components/services.scss";

function DentalServices() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
      ReactGA4.send("pageview");
    }
  }, []);

  const navigate = useNavigate();

  const content = (
    <div className="content">
      <h1 className="mb-4">Dental Services</h1>
      <p className="font-18">
        Dental care in dogs and cats is often one of the most overlooked aspects
        of their well-being. Without our help, our pets may live for years with
        pain and discomfort that is completely preventable.
      </p>
      <section>
        <h2 className="my-3 blue">
          How often does my pet need a dental cleaning?
        </h2>
        <p>
          Your pet's exact needs will depend on several things, including age
          and breed. However, in general, dogs and cats should have their teeth
          cleaned annually.
        </p>
        <p>
          Our veterinarians can provide a dental evaluation to help you
          understand your pet's specific needs.
        </p>
        <button
          to="/dental-eval-request"
          className="btn-filled-primary font-18 mt-5 mb-4"
          style={{ width: "250px" }}
          onClick={() => navigate("/dental-eval-request")}
        >
          Schedule Free Evaluation
        </button>
      </section>
      <section>
        <h2 className="my-3 blue">What happens during a dental cleaning?</h2>
        <p>A dental cleaning will include the following:</p>
        <ul>
          <li>Full mouth dental X-rays</li>
          <li>Tartar removal using specialized dental instruments</li>
          <li>Polishing of the enamel</li>
          <li>
            Disinfection of the mouth with fluoride sealer or plaque repellent
            treatment
          </li>
        </ul>
      </section>
      <section>
        <h2 className="my-3 blue">
          What is dental X-ray and why is it important?
        </h2>
        <p>
          Did you know that more than half of your pet's tooth is under the gum
          line? That means that there is often much more going on than what can
          be seen with the naked eye. Many times these unseen issues are the
          source of pain for our dogs and cats. Dental radiography, or dental
          X-ray, allows our veterinarians to see the full picture so that we can
          take care of each tooth.
        </p>
        <p>
          Dental X-ray is an important part of creating the best outcome for
          your pet, so it is included in every dental procedure we perform at no
          additional cost. Your flat-rate quote will always remain the same,
          even if dental X-ray reveals additional services that need to be
          performed.
        </p>
      </section>
      <section>
        <h2 className="my-3 blue">Will my pet need to be put under?</h2>
        <p>
          At Twin Peaks, all dental cleanings and procedures are done under
          general anesthesia to ensure the best outcome. The quality of care
          your pet will receive is significantly higher than what could be
          provided while they are awake.
        </p>
        <p>
          The price we quote includes pre-surgical bloodwork to make sure that
          your pet is a good candidate for anesthesia before we proceed.
        </p>
      </section>
      <section>
        <h2 className="my-3 blue">
          What if my dog or cat needs more than a cleaning?
        </h2>
        <p>
          During your pet's dental evaluation, our veterinarians with let you
          know if your dog or cat needs additional dental services:
        </p>
        <ul>
          <li>
            Tooth extraction - removal of fractured, abcessed, or otherwise
            damaged teeth
          </li>
          <li>Gingivectomy - removal of diseased gum tissue</li>
          <li>Removal of oral tumors or masses</li>
        </ul>
      </section>
      <section>
        <h2 className="my-3 blue">
          How do I know if my pet needs dental work?
        </h2>
        <p>
          We recommend having your dog or cat's dental needs evaluated annually.
          However, if you notice any of these signs, it's best to have them seen
          right away:
        </p>
        <ul>
          <li>Bad breath</li>
          <li>Difficulty eating or eating less</li>
          <li>Loose or broken teeth</li>
          <li>Facial swelling</li>
          <li>Excessive drooling</li>
          <li>Bleeding in mouth</li>
        </ul>
      </section>
      <section>
        <h2 className="my-3 blue">Pricing</h2>
        <table>
          <tbody>
            <tr>
              <td style={{ width: "400px" }}>Dental Cleaning</td>
              <td>$400</td>
            </tr>
            <tr>
              <td style={{ width: "400px" }}>
                Dental Cleaning + Additional Services <br />
                (extractions, oral surgery, etc.)
              </td>
              <td>Free Quote</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3">
          All of our dental procedures follow our flat-rate pricing model. You
          will pay exactly what you are quoted. No surprises.
        </p>
        <button
          to="/dental-eval-request"
          className="btn-filled-primary font-18 mt-5 mb-4"
          style={{ width: "250px" }}
          onClick={() => navigate("/dental-eval-request")}
        >
          Schedule Free Evaluation
        </button>
      </section>
    </div>
  );

  return (
    <Page
      selectedTab="locations"
      selectedLevel2="evans"
      title="Dental Services"
      //description="Whether you're starting at prevention or dealing a serious dental problem, our veterinarians can help you determine the best plan for you and your pet."
    >
      <div className="locations">
        <EvansBanner />
      </div>
      <div className="service-page">
        <Mobile>{content}</Mobile>
        <NotMobile>
          <div className="container">{content}</div>
        </NotMobile>
      </div>
    </Page>
  );
}
export default DentalServices;
