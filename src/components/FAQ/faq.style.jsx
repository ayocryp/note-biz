import styled from "styled-components";

export const FaqContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 50px;
  color: black;
  @media (max-width: 425px) {
    padding: 30px;
  }
`;

export const FaqWrapper = styled.div`
  max-width: 1320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: #090E27;
  color: #B6F5E8;

  .accordion-button {
    background: white;
    color: #090E27;
    border: 3px solid black;
    text-align: center;
    line-height: 1.9rem;
    font-family: "Moderat", sans-serif !important;
    font-weight: 300;
    letter-spacing: 0.8px;
    border-radius: 1px;
    font-size: 17px;
  }
  .accordion-body {
    text-align: center;
    line-height: 1.9rem;
    font-family: "Moderat", sans-serif !important;
    font-weight: 300;
    letter-spacing: 0.1px;
  }
  
`;

export const FaqText = styled.div`
  margin: 0;
  line-height: 1.9rem;
    font-family: "Moderat", sans-serif !important;
    font-weight: 300;
    letter-spacing: 0.1px;

`;

export const SectionTitle = styled.div`
  font-size: 44px;
  font-weight: 500;
  line-height: 1.2;
  color: white;
  text-align: center;
  margin: 54px 0;
  font-family: "Millik", sans-serif !important;
  border: none;

  @media (max-width: 900px){
    font-size: 25px;
    font-weight: 500;
  }
`;

