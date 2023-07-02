import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: whitesmoke;
  padding: 155px 6% 86px;

  @media (max-width:900px){
    padding: 10px;
  }
`;

export const ArticleContainer = styled.div`
  max-width: 50%;
  @media (max-width: 990px) {
    width: 100%;
    max-width: 100%;
    padding: 5%;
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ArticleTitle = styled.div`
  color: #fb9129;
  font-family: "Millik", sans-serif !important;
  margin: 0;
  font-size: 90px;
  font-weight: 600;

  span {
    color: black;
    font-size: 104px;
    font-weight: 300;
    font-family: "Millik", sans-serif !important;
    @media (max-width: 900px) {
      font-size: 32px;
    }
  }

  @media (max-width: 900px) {
    font-size: 32px;
  }
`;

export const ArticleText = styled.div`
  margin: 30px 0;
  p {
    margin: 0;
    color: #212529;
    line-height: 1.9rem;
    font-family: "Moderat", sans-serif !important;
    font-weight: 100;
    letter-spacing: 0.8px;
    word-break: break-all;
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

  // @media (max-width: 900px){
  //   width: 100px;
   
  // }

`;

export const OrderBtn = styled.div`
  color: rgb(255, 255, 255);
  width: fit-content;
  background-color: #0a0e27;
  cursor: pointer;
  padding: 15px 17px;
  font-size: 1rem;
  font-family: "Moderat", sans-serif !important;
  font-weight: 100;
  border-radius: 3px;
`;
export const MainWrapper = styled.div`
  max-width: 1320px;
  display: flex;
  align-items: flex-end;
  padding: 100px 0;
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;
