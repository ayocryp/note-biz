import {
  ServiceContainer,
  SectionTitle,
  SectionImage,
  SectionWrapper,
  WritingImage,
} from "./service.style";

const ServiceComponent = () => {
  return (
    <ServiceContainer id="what">
      <SectionWrapper>
        <SectionTitle>
          Build a successful online business with our{" "}
          <span>Commerce tools</span>
        </SectionTitle>

        <SectionImage>
          <WritingImage src="/assets/Image/Service/writing.svg" alt="Writing" />
        </SectionImage>
      </SectionWrapper>
    </ServiceContainer>
  );
};

export default ServiceComponent;
