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
            <p>Store</p>
            <p>
              Create a free ecommerce website and start selling worldwide with
              just a few clicks.
            </p>
          </div>
          <div>
            <img src="/assets/Image/Service/service.jpg" alt="service" />
          </div>
        </SectionContent>
      </SectionWrapper>
    </ServiceContainer>
  );
};

export default ServiceComponent;
