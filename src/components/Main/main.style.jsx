import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: whitesmoke;
  padding: 155px 6% 86px;
`;

export const ArticleContainer = styled.div`
  max-width: 50%;
  @media (max-width: 990px) {
    width: 100%;
    max-width: 100%;
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ArticleTitle = styled.div`
  h2 {
    color: #212529;
    margin: 0;
    font-size: 55px;
    font-weight: 500;
    text-shadow: 1px 2px 2px rgb(88, 56, 56);
    @media (max-width: 900px) {
      font-size: 35px;
    }
  }
`;

export const ArticleText = styled.div`
  margin: 20px 0;
  p {
    margin: 0;
    color: #212529;
    line-height: 1.7rem;
  }
`;

export const ImageSection = styled.div`
  max-width: 50%;
  width: 50%;
  display: flex;
  justify-content: center;
  @media (max-width: 990px) {
    width: 100%;
    max-width: 100%;
    margin-top: 70px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const ArticleImage = styled.img`
  width: 400px;
`;

export const OrderBtn = styled.div`
  color: rgb(255, 255, 255);
  width: fit-content;
  background-color: rgb(88, 56, 56);
  cursor: pointer;
  padding: 12px 16px;
  font-size: 1.25rem;
  border-radius: 0.3rem;
`;
export const MainWrapper = styled.div`
  max-width: 1320px;
  display: flex;
  align-items: flex-end;
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;
