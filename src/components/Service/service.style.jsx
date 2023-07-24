import styled from "styled-components";

export const ServiceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SectionContent = styled.div`
  text-align: center;
  align-items: center;
  width: 80%;
  gap: 30px;
  font-family: "Millik", sans-serif !important;

  margin-top: 4rem;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 2.5rem;
  }

  div {
    img {
      width: 1000px;
      height: 648px;
      cursor: pointer;
      @media screen and (max-width: 900px) {
        width: 100%;
        height: 100%;
        margin-top: 0;
      }
    }
    
    p {
      text-align: justify;
      text-justify: inter-word;
      font-size: 20px;
      font-family: "Moderat", sans-serif !important;
      letter-spacing: 2px;
      font-weight: 100;
      :first-child {
        text-align: center;
        font-size: 40px;
        font-weight: 700;
      }
      li{
        padding: 0.8rem;
        
      }
    }
  }
`;

export const SectionTitle = styled.div`
  font-size: 4rem;
  font-weight: 500;
  line-height: 1.8;
  color: #0a0e27;
  text-align: center;
  margin: 56px 0;
  font-family: "Millik", sans-serif !important;
  margin-top: 80px;
  span {
    color: green;
    font-size: 4rem;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
    margin: 56px 0;
    font-family: "Millik", sans-serif !important;
  }

  @media (max-width: 900px){
    font-size: 40px;
    padding: 0;
    margin: 25px 0px;
    line-height: 1.4;
    span{
      font-size: 35px;
    }
  }
`;
