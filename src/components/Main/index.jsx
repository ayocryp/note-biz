import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";


import {
  MainContainer,
  ArticleContainer,
  ImageSection,
  ArticleImage,
  ArticleTitle,
  ArticleText,
  MainWrapper,
  OrderBtn,
} from "./main.style";

// Animatiom

const variant1 = {
  hidden: {
    y: '-80vh' ,
    opacity:0.1,

  },

  visible: {
    y: 0,
    opacity:1,
    transition:{
      delay: 0.3,
      duration: 1
    }
  }
}

const MainComponent = () => {
 
  const articleText =
    "GCMS (Global Case Management System) is a software system used by Immigration, Refugees and Citizenship Canada (IRCC) to process immigration and citizenship applications. GCMS is a single integrated system designed to process applications both inside Canada and outside. It is the most comprehensive and up-to-date information that can be obtained to understand the status of a visa application or to learn the details about a visa refusal.";
  const imageSrc =
    "/assets/image/Main/vincent-van-zalinge-5vCvYLEJRzg-unsplash-removebg-preview.png";

  return (
  <motion.div variants={variant1} initial="hidden" animate="visible">
      
  
    <MainContainer id="home">
      <MainWrapper>
        <ArticleContainer>
          <ArticleTitle>
            Limitless<span>Immigration</span>
          </ArticleTitle>
          <ArticleText>
            <p>{articleText}</p>
          </ArticleText>
          {/* <OrderBtn onClick={() => navigate("/get_your_note")}>
            Order your notes now
          </OrderBtn> */}
          <Link to="/get-your-note">
              <OrderBtn >Order your note </OrderBtn>
            </Link>
        </ArticleContainer>
        <ImageSection>
          <ArticleImage src={imageSrc} alt="Immigration" />
        </ImageSection>
      </MainWrapper>
      </MainContainer>
      </motion.div>
  );
};

export default MainComponent;
