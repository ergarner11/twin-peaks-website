import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";
import Accordion from "react-bootstrap/Accordion";

import Page from "../common/page";
import { Mobile, NotMobile } from "../common/responsive";

function Vaccines() {
  useEffect(() => {
    ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
    ReactGA4.send("pageview");
  }, []);

  const content = (
    <div className="content">
      <h1 className="mb-3">Vaccinations</h1>
      <p className="font-18">
        Vaccinations can entirely prevent or greatly reduce the severity of some
        of the most common and dangerous diseases found in dogs and cats.
        Staying current on all recommended vaccines is one of the best things
        you can do for the health of your pet. But what does that mean?
      </p>
      <section>
        <h2>Let's break it down</h2>
        <p>Generally speaking, there are two primary categories of vaccines:</p>
        <section className="my-0">
          <section className="ms-4 my-0">
            <h3>Core</h3>
            <div className="ms-4">
              <p>
                These are vaccines that all pets should receive, regardless of
                lifestyle
              </p>
              <p>They include the following:</p>
              <ul>
                <li>Rabies</li>
                <li>DAPP (Canine)</li>
                <li>FVRCP (Feline)</li>
              </ul>
            </div>
          </section>
          <section className="ms-4 my-0">
            <h3>Non-Core</h3>
            <div className="ms-4">
              <p>
                These are vaccines that will be recommended by our veterinarians
                based on the individual needs of your pet
              </p>
              <p>They include the following:</p>
              <ul>
                <li>Bordetella (Canine)</li>
                <li>Leptospirosis (Canine)</li>
                <li>FeLV (Feline)</li>
              </ul>
            </div>
          </section>
        </section>
      </section>
      <section>
        <h2>Learn more about each vaccine</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Rabies</Accordion.Header>
            <Accordion.Body>
              <p>
                Rabies is an incurable disease that is often fatal in humans and
                always fatal in unvaccinated animals. It is an infectious
                disease caused by a virus. The virus is transmitted by the
                saliva of an infected animal, usually through a bite and it
                attacks the brain and nervous system. The good news is that
                rabies is 100% preventable with proper vaccinations for pets and
                avoiding wildlife.
              </p>
              <p>
                Dogs and cats over the age of 4 months are required by law to be
                vaccinated against rabies in Larimer County. Rabies is on the
                rise in our community, and we need to take steps to keep
                ourselves, our family, pets, and community safe. In addition to
                wildlife, we continue to see multiple cases of humans and pets
                exposed to the disease in Northern Colorado. The State of
                Colorado takes rabies exposure seriously. Because of the
                seriousness of this disease, the State of Colorado has strict
                laws in place regarding rabies exposure to keep people and pets
                safe.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>DAPP</Accordion.Header>
            <Accordion.Body>
              <p>
                DAPP stands for Distemper, Adenovirus, Parainfluenza, and
                Parvovirus. These are common viruses that affect dogs.
              </p>
              <p>
                Canine distemper is one of the most infamous of dog diseases.
                Dogs can be infected by airborne and droplet exposure. Once the
                virus enters the body, it affects the lymphatic, respiratory,
                gastrointestinal, urogenital, and central nervous systems.
              </p>
              <p>
                Canine adenovirus causes infectious canine hepatitis, a
                dangerous liver condition. It is transmitted by animal-to-animal
                contact or contact with inanimate objects which are likely to
                carry infection, such as clothes, utensils, and furniture.
                Adenovirus is shed in bodily fluids such as saliva, feces and
                urine. Infection affects not only the liver, but can also affect
                the kidneys, eyes, brain and even the body's ability to clot
                blood.
              </p>
              <p>
                Canine parainfluenza is a common cause for upper respiratory
                tract disease in dogs. It is spread by contact with respiratory
                secretions (snot and mucus).
              </p>
              <p>
                Canine parvovirus can be fatal and affect dogs of any age but
                puppies less than 12 months of age are the most susceptible.
                Dogs are infected by ingestion of the virus, which is shed in
                feces. Parvo is most known for causing issues with the
                gastrointestinal system but can also affect the heart.
                Parvovirus can survive in the environment for months to years.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>FVRCP</Accordion.Header>
            <Accordion.Body>
              <p>
                FVRCP stands for Feline Viral Rhinotracheitis, Calicivirus, and
                Panleukopenia. These are common viruses that affect cats.
              </p>
              <p>
                Feline Viral Rhinotracheitis and Feline Calicivirus both cause
                inflammation of the upper respiratory tract, which can lead to
                respiratory infections. Both are very contagious and are spread
                by respiratory secretions (snot and mucus)
              </p>
              <p>
                Feline Panleukopenia is an extremely serious disease that is
                often fatal, especially in kittens. It attacks the immune
                system, leaving infected cats vulnerable to other infections and
                diseases.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Leptospirosis</Accordion.Header>
            <Accordion.Body>
              <p>
                Leptospirosis is caused by various strains (serovars) of
                bacteria that occur worldwide, most commonly in the summer or
                fall. Colorado is a higher risk state due to our close proximity
                to wildlife and higher incidence of contaminated soil or bodies
                of water in which the bacteria can survive for weeks to months.
                Infected dogs often have a fever, do not eat well, may vomit,
                and may suffer from sudden liver and kidney damage. This
                disease, even when treated aggressively, can be fatal. Infected
                dogs shed the bacteria in their urine, and humans can become
                infected by contact with contaminated ground water, soil, or
                animal urine. In Larimer County, leptospirosis can be seen in
                squirrels, raccoons, deer, and rodents, which remain
                asymptomatic but continue the spread of the disease.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Bordetella</Accordion.Header>
            <Accordion.Body>
              <p>
                This vaccine helps protect dogs against some of the most common
                bacteria that cause contagious bronchitis and is recommended for
                dogs that stay in boarding facilities, go regularly to groomers,
                visit dog parks, attend dog shows or obedience classes, or
                frequently contact large numbers of dogs. There is still the
                risk of exposure to other bacteria and viruses that cause an
                upper respiratory infection in dogs, but the clinical signs or
                disease is usually less severe when a dog has protection from
                the Bordetella vaccine.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>FeLV</Accordion.Header>
            <Accordion.Body>
              <p>
                This vaccine prevents Feline Leukemia Virus, which can cause
                cancer and immunodeficiency in cats. Because of this, it has a
                very high mortality rate. FeLV is transferrred from other
                infected cats.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </div>
  );

  return (
    <Page
      title="Vaccinations"
      description="Staying current on all recommended vaccines is one of the best things you can do for the health of your pet"
      className="service-page vaccines"
    >
      <div className="banner" />
      <Mobile>{content}</Mobile>
      <NotMobile>
        <div className="container">{content}</div>
      </NotMobile>
    </Page>
  );
}
export default Vaccines;
