import {
  ServiceContainer,
  SectionTitle,
  SectionWrapper,
  SectionContent,
} from "./service.style";

const ServiceComponent = () => {
  return (
    <ServiceContainer id="what">
      <SectionWrapper>
        <SectionTitle>
          Build a successful online business with our{" "}
          <span>Commerce tools</span>
        </SectionTitle>
        <SectionContent>
        <div>
            <img src="/assets/Image/Service/service.jpg" alt="service" />
          </div>
          <div className="Commit">
            <p>Our Commitment</p>
            <p>
              Limitless Immigration is a professional and independent organization that offers GCMS notes service to individuals who have applied for a Canadian visa. We pride ourselves on providing an unbiased, transparent, and trustworthy service to our clients. As an independently owned and operated business, we are committed to providing high-quality services to ensure our clients receive accurate and reliable information about their visa application.
            </p>
          </div>
          
          
        </SectionContent>
      </SectionWrapper>
    </ServiceContainer>
  );
};

export default ServiceComponent;
