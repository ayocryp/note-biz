import { FaqContainer, FaqWrapper, SectionTitle } from "./faq.style";
import Accordion from "react-bootstrap/Accordion";

const FAQ_DATA = [
  {
    question: "Why GCMS notes?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, magnam.",
  },
  {
    question: "Why GCMS?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, magnam.",
  },
];

const FaqComponent = () => (
  <FaqContainer id="faq">
    <FaqWrapper>
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <Accordion flush data-aos="fade-up">
        {FAQ_DATA.map(({ question, answer, index }) => (
          <Accordion.Item eventKey={index} key={question}>
            <Accordion.Header>{question}</Accordion.Header>
            <Accordion.Body>{answer}</Accordion.Body>
            <Accordion.Header>{question}</Accordion.Header>
            <Accordion.Body>{answer}</Accordion.Body>
            <Accordion.Header>{question}</Accordion.Header>
            <Accordion.Body>{answer}</Accordion.Body>
            <Accordion.Header>{question}</Accordion.Header>
            <Accordion.Body>{answer}</Accordion.Body>
            <Accordion.Header>{question}</Accordion.Header>
            <Accordion.Body>{answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </FaqWrapper>
  </FaqContainer>
);

export default FaqComponent;
