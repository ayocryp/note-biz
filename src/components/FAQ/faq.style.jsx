import styled from "styled-components";

export const FaqContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 90px;
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
  background: green;
  color: white;
  

  .accordion-button {
    background: white;
    color: black;
    border: 5px solid #62A449;
    text-align: center;
    font-family: "Millik", sans-serif !important;
    border-radius: 10px;
    font-size: 20px;
  }
  .accordion-body {
    text-align: center;
    color: black;
    font-family: "Millik", sans-serif !important; 
    border: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 100;
  }
  
`;

export const FaqText = styled.div`
  margin: 0;
  font-family: "Millik", sans-serif !important;

`;

export const SectionTitle = styled.div`
  font-size: 4rem;
  font-weight: 500;
  line-height: 1.2;
  color: #fff;
  text-align: center;
  margin: 54px 0;
  font-family: "Millik", sans-serif !important;
  border: none;
`;

