import React from "react";
import {
  ServiceContainer,
  LeftImage,
  MainSection,
  SectionTitle,
  SectionContent,
  SectionImage,
  RightImage,
  NoteImage,
  PenImage,
  SectionWrapper,
  WritingImage,
} from "./service.style";

const ServiceComponent = () => {
  const servicesList = [
    "Lets you know if your representative is doing his/her job",
    "Helps your prepare for interview and gather documents",
    "Lets you know the status of your visa application",
    "Understand visa refusal reasons",
  ];

  return (
    <ServiceContainer id="what">
      <LeftImage>
        <NoteImage src="/assets/image/service/note.svg" alt="Note" />
      </LeftImage>
      <MainSection>
        <SectionWrapper>
          <SectionTitle>Our service</SectionTitle>
          <SectionContent>
            <p>
              We are a privately owned and operated professional firm that
              offers GCMS notes to anyone seeking a Canadian visa. We provide
              you an unbiased, open, and reliable service. We understand how
              difficult it is to find the ideal expert, so we're here to assist
              on all fronts – from sourcing to providing a friendly shoulder to
              lean on.
            </p>
            <p>GCMS Notes are helpful with the following;</p>
            <ul>
              {servicesList.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
            <p>
              We submit your request to the government agency once we receive
              the application details, payment, and consent form. After
              receiving all required information, the order is submitted within
              24 hours.
            </p>
            <p>
              We are an independently owned and operated professional firm
              providing GCMS notes service to those who have applied for a
              Canadian visa. We provide you with an unbiased, transparent and
              trustworthy service.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
              distinctio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              odit quibusdam optio tempora accusantium culpa nobis sint ipsa at,
              animi a porro voluptatum! Odit rem autem culpa, eius vitae optio.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              repellendus quasi nulla blanditiis? Necessitatibus quidem et rem
              libero eos incidunt veritatis dignissimos eum delectus voluptates
              praesentium ea, quia fugit maxime.
            </p>
          </SectionContent>
          <SectionImage>
            <WritingImage
              src="/assets/Image/Service/writing.svg"
              alt="Writing"
            />
          </SectionImage>
        </SectionWrapper>
      </MainSection>
      <RightImage>
        <PenImage src="/assets/Image/Service/pen.svg" alt="Pen" />
      </RightImage>
    </ServiceContainer>
  );
};

export default ServiceComponent;
