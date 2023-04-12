import {
  FaqContainer,
  FaqWrapper,
  FaqTitle,
  FaqButton,
  FaqText,
  FaqContent,
} from "./faq.style";

const FAQ_DATA = [
  {
    question: "Why GCMS notes?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, magnam.",
  },
];

const FaqComponent = () => (
  <FaqContainer id="faq">
    <FaqWrapper>
      <FaqTitle>FREQUENTLY ASKED QUESTIONS</FaqTitle>
      {FAQ_DATA.map(({ question, answer }) => (
        <FaqContent key={question}>
          <FaqButton>{question}</FaqButton>
          <FaqText>{answer}</FaqText>
        </FaqContent>
      ))}
    </FaqWrapper>
  </FaqContainer>
);

export default FaqComponent;
