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

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  div {
    img {
      width: 517px;
      height: 648px;
      object-fit: cover;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    
    margin-top: 6.5rem;
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
  line-height: 1.2;
  color: #0a0e27;
  text-align: center;
  margin: 56px 0;
  font-family: "Millik", sans-serif !important;
  span {
    color: green;
    font-size: 4rem;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
    margin: 56px 0;
    font-family: "Millik", sans-serif !important;
  }
`;
