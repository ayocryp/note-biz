import styled, { css } from "styled-components";

const leafAnimation = (left, duration, delay) => css`
  left: ${left};
  animation: fall ${duration}s linear infinite;
  animation-delay: ${delay}s;
`;

export const DownloadBtn = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  padding: 10px 0;
  width: 20rem;
  font-family: "Moderat", sans-serif !important;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0.1px;
  border: none;
  background-color: #f6ca59;
  margin-bottom: 30px;
  color: black;

  span {
    margin-left: 3px;
    display: flex;
    width: 14px;
    height: 14px;
    align-items: center;
    background-color: black;
    border-radius: 2px;
    font-size: 8px;
    color: white;
    justify-content: center;
  }
`;

export const OrderContainer = styled.div`
  padding: 3% 2%;
  display: flex;
  justify-content: center;

  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 200px;
  word-break: break-all;

  @media (max-width: 900px) {
    padding: 20% 0%;
  }
  .leaf div {
    position: absolute;
    display: block;
  }

  .leaf div:nth-child(1) {
    ${leafAnimation("20%", 15, -2)}
  }
  .leaf div:nth-child(2) {
    ${leafAnimation("70%", 15, -4)}
  }
  .leaf div:nth-child(3) {
    ${leafAnimation("10%", 20, -7)}
  }
  .leaf div:nth-child(4) {
    ${leafAnimation("50%", 18, -5)}
  }
  .leaf div:nth-child(5) {
    ${leafAnimation("85%", 14, -5)}
  }
  .leaf div:nth-child(6) {
    ${leafAnimation("15%", 16, -10)}
  }

  @keyframes fall {
    0% {
      opacity: 1;
      top: -10%;
      transform: translateX(20px) rotate(0deg);
    }
    20% {
      opacity: 0.8;
      transform: translateX(-20px) rotate(45deg);
    }
    40% {
      transform: translateX(-20px) rotate(90deg);
    }
    60% {
      transform: translateX(-20px) rotate(135deg);
    }
    80% {
      transform: translateX(-20px) rotate(180deg);
    }
    100% {
      top: 110%;
      transform: translateX(-20px) rotate(225deg);
    }
  }
`;

export const OrderWrapper = styled.div`
  padding: 5% 3%;
  max-width: 100%;

  // box-sizing: border-box;
`;

export const Title = styled.div`
  font-size: 55px;
  color: black;
  text-align: center;
  margin: 40px 0 50px 0;
  padding: 0 0 10px;
  font-family: "Millik", sans-serif !important;
  @media (max-width: 900px) {
    font-size: 35px;
    margin-top: 50px;
    margin-bottom: 10px;
  }
`;

export const Desc = styled.div`
  font-family: "Moderat", sans-serif !important;
  line-height: 1.9rem;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0.1px;

  @media (max-width: 900px) {
    font-family: "Moderat", sans-serif !important;
    line-height: 1.9rem;
    font-size: 15px;
    font-weight: 300;
    letter-spacing: 0.1px;
    margin-bottom: 40px;
    padding: 8px;
  }
`;

export const NoteWrapper = styled.div`
  color: #0a0e27;
  padding: 10%;
  font-family: "Moderat", sans-serif !important;
  line-height: 1.9rem;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0.1px;
`;

export const GroupWrapper = styled.div`
  width: 100%;
  font-family: "Moderat", sans-serif !important;
  line-height: 1.9rem;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0.1px;
`;

export const GroupTitle = styled.div`
  margin-top: 120px;
  margin-bottom: 50px;
  color: green;
  word-break: break-all;
  font-family: "Millik", sans-serif !important;
  line-height: 1.5rem;
  font-size: 45px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 35px;
    font-family: "Millik", sans-serif !important;
    line-height: 2.5rem;
    letter-spacing: 2px;
    word-break: break-all;
    text-align: center;
  }
`;

export const HowTo = styled.div`
  font-family: "Moderat", sans-serif !important;
  line-height: 1.9rem;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0.1px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    padding: 8px;
    font-family: "Moderat", sans-serif !important;
    line-height: 1.9rem;
    font-size: 15px;
    font-weight: 300;
    letter-spacing: 0.1px;
  }
`;
