import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";

import Page from "../common/page";
import { Mobile, NotMobile } from "../common/responsive";

function Wellness() {
  useEffect(() => {
    ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
    ReactGA4.send("pageview");
  }, []);

  const content = (
    <div className="content">
      <h1 className="mb-3">Wellness Exams</h1>
      <p className="font-18">
        Just like people, pets also need regular check ups from qualified
        medical professionals throughout their lives. In fact, since pets age
        much faster than humans, this may be even more important.
      </p>
      <section>
        <h2 className="blue">What is a wellness exam?</h2>
        <p>
          A wellness exam is an opportunity for a veterinarian to determine the
          overall health of an animal and to make any recommendations that would
          increase his or her quality of life. During a routine wellness exam,
          one of our doctors will examine your pet from nose to tail. They will
          look at their vital signs, weight, and the results of any routine
          blood work or tests to identify anything abnormal or unexpected. This
          is also a great time to make sure they are caught up on all of their
          preventive care.
        </p>
      </section>
      <section>
        <h2 className="blue">Why does my pet need a wellness exam?</h2>
        <p>
          If your pet isn't sick, it may be hard to see why a trip to the vet is
          necessary. But there are many reasons to make wellness exams part of
          your dog or cat's lifelong routine. Consistent check ups greatly
          increase the odds of catching disease and other issues in the earliest
          stages, making a favorable outcome much more likely. They allow you to
          discuss with your veterinarian any concerns you have and to get
          answers to your questions. Additionally, you and your vet can touch
          base on many aspects of your pet's health and make a plan to adjust
          for every stage and circumstance in his or her life.
        </p>
      </section>
      <section>
        <h2 className="blue">How often does my pet need a wellness exam?</h2>
        <p>
          Generally speaking, all pets should see a veterinarian at least once
          per year, though the recommended frequency of wellness exams may be
          higher depending on the age and overall health of your pet. Our
          doctors will help you know how often he or she needs to be seen.
        </p>
      </section>
      <p className="font-18 bold">
        If your pet is due for a wellness exam, don't delay. Give him or her the
        gift of a longer, healthier, happier life!
      </p>
    </div>
  );

  return (
    <Page
      selectedTab="services"
      title="Wellness Exams"
      description="During each wellness exam, one of our doctors will examine your pet from nose to tail. Routine exams help your pet live a longer, healthier, happier life!"
      className="service-page wellness"
    >
      <div className="banner" />
      <Mobile>{content}</Mobile>
      <NotMobile>
        <div className="container">{content}</div>
      </NotMobile>
    </Page>
  );
}
export default Wellness;
