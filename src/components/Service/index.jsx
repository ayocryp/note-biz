
import {
  ServiceContainer,
  SectionTitle,
  SectionWrapper,
  SectionContent,
} from "./service.style";

import { motion } from "framer-motion";

const variant1 = {
  hidden: {
    y: '60vh',
    opacity: 0.1,

  },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.9,
      duration: 1
    }
  }
}

const ServiceComponent = () => {
  return (
    <motion.div variants={variant1} initial="hidden" animate="visible">

      <ServiceContainer id="what">
        <SectionWrapper>
          <SectionTitle>
            Make your immigration dream come true with our{" "}
            <span>service</span>
          </SectionTitle>
          <SectionContent>
            <div>
              <img src="/assets/Image/Service/4273886.jpg" alt="service" />
            </div>

          </SectionContent>
        </SectionWrapper>
      </ServiceContainer>
    </motion.div>
  );
};

export default ServiceComponent;
