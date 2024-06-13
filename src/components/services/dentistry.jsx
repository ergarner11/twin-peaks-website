import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";

import Page from "../common/page";
import { Mobile, NotMobile } from "../common/responsive";

function Dentistry() {
  useEffect(() => {
    ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
    ReactGA4.send("pageview");
  }, []);

  const content = (
    <div className="content">
      <h1 className="mb-3">Dentistry</h1>
      <p className="font-18">
        Imagine what would happen to you if you went years without brushing your
        teeth or visiting a dentist. For most people, this routine would result
        in deterioration of the gums, pain from untreated issues, and certainly
        some very bad breath! Just like humans, when it comes to a healthy and
        happy pet, proper dental hygiene is something that shouldn't be
        overlooked. Here's a few things you should know.
      </p>
      <section>
        <h2 className="my-3 blue">Periodontal Disease</h2>
        <p>
          Periodontal disease is disease around the outside of the tooth. If we
          do not regularly disinfect our mouths and brush away plaque, the
          plaque will mineralize into tartar (the gritty material that your
          dental hygienist scrapes away). Over time, tartar will accumulate and
          destroy the tooth's attachment, causing the tooth to become loose and
          painful. When the bone becomes infected, bone loss occurs. In severe
          cases, the jaw bone can potentially break or even disintegrate (a
          serious problem in very small dogs). Gingivitis is reversible. Bone
          loss, once it starts, is not reversible.
        </p>
        <p className="bold">
          An alarming 85% of pets have periodontal disease by the time they are
          3 years old.
        </p>
      </section>
      <section>
        <h2 className="my-3 blue">What to do about Periodontal Disease</h2>
        <p>
          Fortunately, there is a lot we can do to prevent periodontal disease,
          and the rules are basically the same whether the teeth belong to a pet
          or to a human:
        </p>
        <section>
          <section className="ms-4">
            <h3>Professional cleaning</h3>
            <div className="ms-4">
              <p>
                In general, you should plan for your pet to have a professional
                teeth cleaning annually. At Twin Peaks, all cleanings are done
                under general anesthesia so that each tooth will receive proper
                care and attention.
              </p>

              <p>A dental cleaning will include the following:</p>
              <ul>
                <li>Tartar removal using specialized dental instruments</li>
                <li>
                  Probing and measurement of periodontal sockets to assess
                  periodontal disease
                </li>
                <li>Polishing of the enamel</li>
                <li>
                  Disinfection of the mouth with possible fluoride sealer or
                  plaque repellent treatment
                </li>
              </ul>
            </div>
          </section>
          <section className="ms-4">
            <h3>At-Home Care</h3>
            <div className="ms-4">
              <p>
                Home care is ideally a daily part of tooth maintenance, but even
                brushing just twice a week can remove most plaque before it can
                mineralize into tartar. Not every pet is amenable to hands-on
                oral care, so there are some lower maintenance options which can
                be explored as well.
              </p>

              <p>At-home options include:</p>
              <ul>
                <li>Brushing using pet-approved toothpaste</li>
                <li>Dental wipes, rinses, and pads</li>
                <li>Dental treats</li>
              </ul>
            </div>
          </section>
        </section>
      </section>
      <p className="font-18">
        Whether you're starting at prevention or dealing with a serious dental
        problem, our veterinarians would love to answer any of your questions
        and help you determine the best plan for you and your pet.
      </p>
    </div>
  );

  return (
    <Page
      selectedTab="services"
      title="Dentistry"
      description="Whether you're starting at prevention or dealing a serious dental problem, our veterinarians can help you determine the best plan for you and your pet."
      className="service-page dentistry"
    >
      <div className="banner" />
      <Mobile>{content}</Mobile>
      <NotMobile>
        <div className="container">{content}</div>
      </NotMobile>
    </Page>
  );
}
export default Dentistry;
