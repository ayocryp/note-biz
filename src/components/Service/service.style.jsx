import styled from "styled-components";

export const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2e2e2;
  position: relative;
  z-index: 1;
  padding: 100px 0;
`;

export const LeftImage = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
`;

export const SectionWrapper = styled.div`
  width: 90%;
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

export const SectionImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const WritingImage = styled.img`
  width: 100px;
  height: auto;
`;
