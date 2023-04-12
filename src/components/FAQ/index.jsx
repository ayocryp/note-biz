import {
  FaqContainer,
  FaqWrapper,
  FaqTitle,
  FaqButton,
  FaqText,
  FaqContent,
} from "./faq.style";

const FaqComponent = () => {
  return (
    <FaqContainer id="faq">
      <FaqWrapper>
        <FaqTitle>FREQUENTLY ASKED QUESTIONS</FaqTitle>
        <FaqContent>
          <FaqButton>Why GCMS notes?</FaqButton>
          <FaqText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Temporibus, magnam.
          </FaqText>
        </FaqContent>
      </FaqWrapper>
    </FaqContainer>
  );
};

export default FaqComponent;
