import styled from "styled-components";

export const FaqContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 90px;
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
`;

export const FaqTitle = styled.div`
  color: #0a0e27;
  font-size: 35px;
  text-align: center !important;
  font-weight: 500;
  line-height: 1.2;
`;

export const FaqButton = styled.div`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 4rem;
  margin-bottom: 1rem;
  font-family: "Millik", sans-serif !important;
  @media (max-width: 425px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const FaqText = styled.div`
  margin: 0;
`;

export const FaqContent = styled.div`
  background-color: #1d1d1d;
  border-radius: 2rem;
  box-shadow: 0 25px 50px rgba(29, 29, 29, 0.5);
  color: #fff;
  margin: 0 auto;
  max-width: 109.2rem;
  padding: 100px;
  @media (max-width: 425px) {
    padding: 3rem;
  }
`;
