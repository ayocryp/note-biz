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

  .accordion-button {
    background: #030d12;
    color: white;
    border: none;
  }
  .accordion-body {
    background: #030d12;
    color: white;
  }
`;

export const FaqText = styled.div`
  margin: 0;
`;

export const SectionTitle = styled.div`
  font-size: 4rem;
  font-weight: 500;
  line-height: 1.2;
  color: #0a0e27;
  text-align: center;
  margin: 56px 0;
  font-family: "Millik", sans-serif !important;
`;
