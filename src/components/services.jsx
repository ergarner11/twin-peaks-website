import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";
import { Link } from "react-router-dom";

import Page from "./common/page";
import { Mobile, NotMobile } from "./common/responsive";

import { ReactComponent as AllergenIcon } from "../assets/allergen.svg";
import { ReactComponent as BandaidIcon } from "../assets/bandaid.svg";
import { ReactComponent as BoneIcon } from "../assets/bone.svg";
import { ReactComponent as CoughIcon } from "../assets/cough.svg";
import { ReactComponent as DoctorIcon } from "../assets/doctor.svg";
import { ReactComponent as LungIcon } from "../assets/lungs.svg";
import { ReactComponent as PawIcon } from "../assets/paw.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as StethoscopeIcon } from "../assets/stethoscope.svg";
import { ReactComponent as SyringeIcon } from "../assets/syringe.svg";
import { ReactComponent as ToothIcon } from "../assets/tooth.svg";

import allergiesPic from "../assets/allergies.webp";
import cirdcPic from "../assets/cirdc.webp";
import dentistryPic from "../assets/dentistry.webp";
import diagnosticsPic from "../assets/diagnostics.webp";
import kennelCoughPic from "../assets/kennelCough.webp";
import microchipPic from "../assets/microchip.webp";
import nutritionPic from "../assets/nutrition.webp";
import spayNeuterPic from "../assets/spayNeuter.webp";
import tploPic from "../assets/tplo.webp";
import vaccinePic from "../assets/vaccine.webp";
import wellnessPic from "../assets/wellness.webp";

import "../styles/components/services.scss";

function Services() {
  useEffect(() => {
    ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
    ReactGA4.send("pageview");
  }, []);

  const service = (header, icon, content, linkInfo, img) => (
    <div className="service">
      {img}
      <div className="content">
        <h2 className="header">
          {icon}
          {header}
        </h2>
        <p>{content}</p>
        {linkInfo && (
          <Link to={linkInfo}>
            <button className="btn-text-secondary">Learn More</button>
          </Link>
        )}
      </div>
    </div>
  );

  const vaccines = service(
    "Vaccinations",
    <SyringeIcon />,
    "The best way to fight disease is to prevent it in in the first place. Vaccines are a key part of the preventive care of any pet. Do you know which vaccines your pet needs? When was the last time they were updated? If you need help answering these questions, give us a call!",
    "vaccines",
    <img src={vaccinePic} alt="Woman petting a cat" />
  );
  const dentistry = service(
    "Dentistry",
    <ToothIcon />,
    "Unfortunately, the dental needs of pets are too often overlooked. Most owners don't realize how often unmanaged dental conditions lead to serious pain and a decreased quality of life. But there's a lot you can do to prevent that! Trust us, your furry friends will thank you for prioriting their teeth!",
    "dentistry",
    <img src={dentistryPic} alt="Dog opening his mouth" />
  );
  const wellnessExam = service(
    "Wellness Exams",
    <StethoscopeIcon />,
    "Don't underestimate the importance of an annual wellness exam. Taking the time to visit with a veterinarian each year is one of the best ways to ensure your pet lives their longest, healthiest, happiest life!",
    "wellness",
    <img src={wellnessPic} alt="Cat relaxing on a couch" />
  );
  const diagnostics = service(
    "Diagnostics",
    <BandaidIcon />,
    "When your fur baby isn't feeling well, figuring out what is going wrong is the first step to making it right. We have the resources and experience to help you through whatever comes your way!",
    "diagnostics",
    <img src={diagnosticsPic} alt="Dog resting on a wooden floor" />
  );
  const kennelCough = service(
    "Kennel Cough",
    <CoughIcon />,
    "Kennel Cough, an older term describing contagious coughing in dogs, is now considered outdated. It was commonly associated with dogs being boarded, where the infection could easily spread. Today, we use a more comprehensive term, Canine Infectious Respiratory Disease Complex (CIRDC), which encompasses a wider range of contagious respiratory diseases. This updated term reflects our improved understanding of these diseases and their varied causes.",
    "cirdc",
    <img src={kennelCoughPic} alt="Puppy looking around" />
  );
  const cirdc = service(
    "CIRDC",
    <LungIcon />,
    "Canine Infectious Respiratory Disease Complex (CIRDC) is a broad term encompassing highly contagious respiratory illnesses and infections. Find out what you need to know to keep your safe and protected.",
    "cirdc",
    <img src={cirdcPic} alt="Dog resting on a wooden deck" />
  );
  const spayNeuter = service(
    "Spay & Neuter",
    <DoctorIcon />,
    "Getting your pet spayed or neutered is about more than just population control. Did you know that having this surgury can also reduce behavioral and health problems throughout the life of your pet?",
    "spay-neuter",
    <img src={spayNeuterPic} alt="Dog wearing a surgical cone" />
  );
  const allergies = service(
    "Allergies",
    <AllergenIcon />,
    "Is the constant itching, scratching, and licking driving you crazy? Then it's probably time to get to the root of your pet's discomfort. There are many different sources of allergies and many ways to treat them as well. Together we can stop the itch and get your pet feeling better!",
    "allergies",
    <img src={allergiesPic} alt="Dog rolling in the dirt" />
  );
  const microchip = service(
    "Microchip",
    <SearchIcon />,
    "Has your pet ever suddenly become an escape artist? It happens with even the most loyal companions. Losing a pet is a terrible experience, but having them microchipped is one of the best things you can do to ensure a happy reunion!",
    "microchip",
    <img src={microchipPic} alt="Dog stading in a field" />
  );
  const nutrition = service(
    "Nutrition",
    <BoneIcon />,
    "Making sure your pets are eating well is no easy feat! You may be surprised by the many ways that your pet's diet impacts, for better or for worse, their overall health and quality of life. We'll work with you to understand which diet is best for your pet at each phase of their life.",
    "nutrition",
    <img src={nutritionPic} alt="Dog eating food out of a bowl" />
  );
  const tplo = service(
    "TPLO Surgery",
    <PawIcon />,
    "Is your dog dealing with a CCL tear or injury? TPLO is the corrective surgery recommended to get them back to their normal, playful self! Our TPLO surgery packages can help you get on the path to healing.",
    "tplo-surgery",
    <img src={tploPic} alt="Dog lying on a bed" />
  );
  /*
  const pain = service("Pain Management", "blah, blah, blah");
  const surgery = service("Surgery", "blah, blah, blah");
  const heartworm = service("Heartworm Prevention", "blah, blah, blah");
  const fleaTick = service("Flea and Tick Prevention", "blah, blah, blah");
  const anxiety = service("Anxiety/Stress", "blah, blah, blah");*/

  return (
    <Page
      selectedTab="services"
      className="services"
      title="Services"
      description="Our vets are able to perform a variety of veterinary services for your dog or cat. From preventive care, dentistry, and diagnostic services to microchipping and nutrition consultations, we're here to help with whatever your pet needs!"
    >
      <div className="banner">
        <h1>Services</h1>
      </div>
      <Mobile>
        {wellnessExam}
        {dentistry}
        {vaccines}
        {diagnostics}
        {allergies}
        {nutrition}
        {spayNeuter}
        {microchip}
        {tplo}
      </Mobile>
      <NotMobile>
        <div className="container">
          <div className="d-flex justify-content-around">
            {dentistry}
            {vaccines}
          </div>
          <div className="d-flex justify-content-around">
            {wellnessExam}
            {diagnostics}
          </div>
          <div className="d-flex justify-content-around">
            {kennelCough}
            {cirdc}
          </div>
          <div className="d-flex justify-content-around">
            {allergies}
            {nutrition}
          </div>
          <div className="d-flex justify-content-around">
            {spayNeuter}
            {microchip}
          </div>
          <div className="d-flex justify-content-around">{tplo}</div>
        </div>
      </NotMobile>
    </Page>
  );
}
export default Services;
