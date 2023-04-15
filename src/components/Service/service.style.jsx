import styled from "styled-components";

export const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2e2e2;
  position: relative;
  z-index: 1;
`;

export const LeftImage = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
`;

export const MainSection = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
`;

export const SectionWrapper = styled.div`
  max-width: 660px;
  width: 90%;
`;

export const SectionTitle = styled.div`
  font-size: 2.75rem;
  font-weight: 500;
  line-height: 1.2;
  color: #0a0e27;
  text-align: center;
  margin: 56px 0;
  font-family: "Millik", sans-serif !important;
`;

export const SectionContent = styled.div`
  background-color: #f8f9fa;
  padding: 24px 48px 48px;
  line-height: 1.5;
  color: #0a0e27;
  text-align: center;
  p {
    font-size: 1.2rem;
    font-family: "Millik", sans-serif !important;
  }
`;

export const SectionImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const RightImage = styled.div`
  position: absolute;
  right: 0;
  z-index: 0;
  img {
    width: 300px;
  }
`;

export const NoteImage = styled.img`
  width: 100%;
`;

export const PenImage = styled.img`
  width: 100%;
`;

export const WritingImage = styled.img`
  width: 100px;
  height: auto;
`;
