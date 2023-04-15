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
  display: flex;
  align-items: center;
  width: 70%;
  gap: 20px;

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
    p {
      font-size: 20px;
      :first-child {
        font-size: 30px;
        font-weight: 700;
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
