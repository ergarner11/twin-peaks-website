import React from "react";

import kaiser from "../assets/kaiser.webp";
import team from "../assets/team.webp";
import white from "../assets/white.webp";

import Page from "./common/page";
import { Mobile, NotMobile } from "./common/responsive";

import "../styles/components/our-team.scss";

function OurTeam() {
  const hpTeaser = (
    <div className="teaser">
      <div className="section-1">
        <h1>You'll love our team!</h1>
      </div>

      <div className="section-2">
        <img src={team} alt="veterinary technichian working with a dog" />
      </div>
    </div>
  );

  const drWhite = (
    <div className="doctor">
      <div className="header">
        <p>Dr. Natalia White</p>
        <img src={white} alt="Dr. Natalia White, DVM" />
      </div>
      <div className="content">
        <p>
          Dr. White graduated with her veterinary medical degree from Colorado
          State University in 2009. She spent most of her childhood in Phoenix
          and received her Bachelor of Science degree from Arizona State
          University. She was thrilled to move to Northern Colorado over 10
          years ago after being accepted into the veterinary medical program.
          She has always had a love for all animals and knew she wanted to be a
          veterinarian since elementary school.
        </p>
        <p>
          Dr. White is the Medical Director at Twin Peaks Veterinary Clinic and
          believes in providing quality veterinary medicine at a reasonable
          cost. Her sound medical background and surgery skills are an asset to
          the clinic. She looks forward to developing new relationships with
          clients and their pets. She provides veterinary care to each of her
          patients as if they were a part of her own family. Her favorite part
          of being a veterinarian is being able improve each pet’s health and
          see the rewarding bond between pets and their families.
        </p>
        <p>
          Dr. White enjoys spending time outdoors, camping and hiking, as well
          as traveling both within the United States and overseas. She and her
          husband stay busy with two young children at home and their loveable
          tripod cat, Frank.
        </p>
      </div>
    </div>
  );

  const drKaiser = (
    <div className="doctor">
      <div className="header">
        <p>Dr. Katie Kaiser</p>
        <img src={kaiser} alt="Dr. Katie Kaiser, DVM" />
      </div>
      <div className="content">
        <p>
          Dr. Kaiser is an Arizona native who escaped the desert to Colorado
          State University, where she received her Bachelors of Science in
          Biology. She fell in love with the Rocky Mountains, and stayed at CSU
          to obtain her Doctorate of Veterinary Medicine.
        </p>
        <p>
          Dr. Kaiser knew from an early age that she wanted to be a veterinarian
          and has held jobs working with animals since she was in high school.
          Her experiences showed that becoming a veterinarian was her path to
          support the human and animal bond. Dr. Kaiser’s veterinary interests
          are preventive medicine, internal medicine, and clinical pathology.
          Her favorite part of veterinary medicine is being able to create
          long-term relationships with pets and their owners.
        </p>
        <p>
          In her free time, Dr. Kaiser enjoys yoga, hiking, and reading. She has
          three feline children at home- Crimson, Thor, and Flynn. She enjoys
          exploring the mountains on her horse, One Tough Cookie.
        </p>
      </div>
    </div>
  );

  return (
    <Page
      selectedTab="ourTeam"
      className="our-team"
      title="Our Team"
      description="Our team members are all highly-qualified, but more importantly, they are passionate about providing the very best care."
    >
      <Mobile>
        {hpTeaser}
        {drWhite}
        {drKaiser}
      </Mobile>
      <NotMobile>
        <div className="background-black">
          <div className="container d-flex">{hpTeaser}</div>
        </div>
        <div className="container">
          {drWhite}
          {drKaiser}
        </div>
      </NotMobile>
    </Page>
  );
}

export default OurTeam;
