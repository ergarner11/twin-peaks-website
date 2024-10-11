import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";

import Page from "../common/page";
import { Mobile, NotMobile } from "../common/responsive";

import "../../styles/components/services.scss";

function Nutrition() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
      ReactGA4.send("pageview");
    }
  }, []);

  const content = (
    <div className="content">
      <h1 className="mb-3">Nutrition</h1>
      <p className="font-18">
        As humans, we understand that the foods we eat have a significant impact
        on our health, energy levels, weight, and even our lifespans. Sometimes
        it's easy to forget that the same is true for our pets. Not all pet food
        is created equal! It varies greatly in quality as well as in nutritional
        value. Additionally, certain animals have needs that are best met by
        specialized foods.
      </p>
      <section>
        <h2 className="blue">Understanding my pet's nutritional needs</h2>
        <p>
          Your pet's nutritional needs will change throughout their life.
          Certain diets lend focused support to puppies and kittens, seniors,
          and animals with specific health concerns. People often underestimate
          the difference that a diet change can make for their pet. Paying
          proper attention to nutrition can greatly improve your pet's quality
          of life and even extend their life expectancy. Our veterinarians can
          help you to identify nutritional gaps and will make suggestions to
          ensure that your pet is as happy and healthy as possible!
        </p>
      </section>
      <section>
        <h2 className="blue">
          What kinds of things can a proper diet help with?
        </h2>
        <ul>
          <li>Maintaining a healthy weight</li>
          <li>Reducing symptoms of allergies (itching, scratching)</li>
          <li>Supporting your pet through the aging process</li>
          <li>Improving organ function</li>
        </ul>
      </section>
      <p className="font-18">
        If you think your pet could benefit from anything listed above or if you
        would like to know how their current diet is stacking up, schedule a
        time to meet up with one of our veterinarians. We'd love to work with
        you to make sure your pet is getting the most out of their diet!
      </p>
    </div>
  );

  return (
    <Page
      selectedTab="services"
      selectedLevel2="nutrition"
      title="Nutrition"
      description="Don't underestimate the difference a diet change can make for your pet. We can help you identify nutritional gaps and make suggestions specific to your pet"
      className="service-page nutrition"
    >
      <Mobile>{content}</Mobile>
      <NotMobile>
        <div className="container">{content}</div>
      </NotMobile>
    </Page>
  );
}
export default Nutrition;
