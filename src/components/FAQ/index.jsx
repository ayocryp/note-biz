import React from "react";
import {
  FaqContainer,
  FaqWrapper,
  FaqTitle,
  FaqButton,
  FaqText,
} from "./faq.style";

const FaqComponent = () => {
  return (
    <FaqContainer id="pricing">
      <FaqWrapper>
        <FaqTitle>FREQUENTLY ASKED QUESTIONS</FaqTitle>
        <FaqButton>Why GCMS notes?</FaqButton>
        <FaqText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus,
          magnam.
        </FaqText>
      </FaqWrapper>
    </FaqContainer>
  );
};

export default FaqComponent;
