
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
          Make your immigration dream come true with our{" "}
          <span>tools</span>
        </SectionTitle>
        <SectionContent>
          <div>
            <img src="/assets/Image/Service/4273886.jpg" alt="service" />
          </div>
          
        </SectionContent>
      </SectionWrapper>
    </ServiceContainer>
  );
};

export default ServiceComponent;
