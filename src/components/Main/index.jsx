import React from "react";
import { useNavigate } from "react-router-dom";

import {
  MainContainer,
  ArticleContainer,
  ImageSection,
  ArticleImage,
  ArticleTitle,
  ArticleText,
  OrderBtn,
  MainWrapper,
} from "./main.style";

const MainComponent = () => {
  const navigate = useNavigate();
  const articleText =
    "GCMS (Global Case Management System) is a software system used by Immigration, Refugees and Citizenship Canada (IRCC) to process immigration and citizenship applications. GCMS is a single integrated system designed to process applications both inside Canada and outside. It is the most comprehensive and up-to-date information that can be obtained to understand the status of a visa application or to learn the details about a visa refusal.";
  const imageSrc =
    "/assets/image/Main/vincent-van-zalinge-5vCvYLEJRzg-unsplash-removebg-preview.png";

  return (
    <MainContainer id="home">
      <MainWrapper>
        <ArticleContainer>
          <ArticleTitle>
            <h2>Limitless Immigration</h2>
          </ArticleTitle>
          <ArticleText>
            <p>{articleText}</p>
          </ArticleText>
          <OrderBtn onClick={() => navigate("/order")}>
            Order your notes now
          </OrderBtn>
        </ArticleContainer>
        <ImageSection>
          <ArticleImage src={imageSrc} alt="Immigration" />
        </ImageSection>
      </MainWrapper>
    </MainContainer>
  );
};

export default MainComponent;
