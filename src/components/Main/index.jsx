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
    y: '30vh' ,
    opacity:0,

  },

  visible: {
    y: 0,
    opacity:1,
    transition:{
      
      duration: 1.8
    }
  }
}

const MainComponent = () => {
 
  const articleText =
    "Welcome to Limitless, your trusted partner in the Canadian visa application journey. As an independently owned and operated professional firm, we specialize in providing top-tier GCMS (Global Case Management System) notes services to individuals like you who are navigating the complex path to obtaining a Canadian visa.";
  const imageSrc =
    "/assets/image/Main/LimitFrontIma.png";

  return (
    <>
      <MainContainer id="home">
        <MainWrapper>
          {" "}
          <ArticleContainer>
            <motion.div variants={variant1} initial="hidden" animate="visible">
              <ArticleTitle>
                Limitless<span>Immigration</span>
              </ArticleTitle>
              <ArticleText>
                <p>{articleText}</p>
              </ArticleText>

              <Link to="/get-your-note">
                <OrderBtn>Order your note today </OrderBtn>
              </Link>
            </motion.div>
          </ArticleContainer>
          <ImageSection>
            <ArticleImage src={imageSrc} alt="Immigration" />
          </ImageSection>
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default MainComponent;
