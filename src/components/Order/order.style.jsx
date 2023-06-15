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
  padding: 12px 0;
  width: 20rem;
  font-family: "Moderat", sans-serif !important;
    font-size: 17px;
    font-weight: 300;
    letter-spacing: 0.1px;
  border: none;
  background-color: #F6CA59;
  margin-bottom: 50px;
  color: white;


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
  padding: 150px 0;
  display: flex;
  justify-content: center;
  background: url(./assets/Image/Order/check.gif);
  background-position:  bottom center;
  background-repeat: no-repeat;
  background-size: 350px;
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
  padding: 8%;
  border-radius: 1px;
  max-width: 80%;
  width: 100%;
  box-sizing: border-box;
  
`;

export const Title = styled.div`
  font-size: 55px;
  color: black;
  text-align: center;
  margin: 0px 0px 50px 0;
  padding:  0px 0px 10px;
  font-family: "Millik", sans-serif !important;
`;

export const Desc = styled.div`
  color: black;
  text-align: center;
  margin: 0px 0px 18px;
  padding: 0px 0px 30px;
  font-family: "Moderat", sans-serif !important;
  line-height: 1.9rem;
    font-size: 17px;
    font-weight: 300;
    letter-spacing: 0.1px;
`;

export const NoteWrapper = styled.div`
  color: #0a0e27;
  // background: white;
  padding: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
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
  margin-bottom: 10px;
  color: #F6CA59;
  word-break: break-all;
  font-family: "Moderat", sans-serif !important;
  line-height: 1.5rem;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.8px;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media screen and (max-width: 768px) {
    gap: 20px;
  }
`;

export const FormItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.id === "last" ? "center" : "flex-start"};

  @media screen and (max-width: 768px) {
    align-items: start;
    gap: 10px;

    flex-direction: ${(props) => (props.id === "last" ? "row" : "column")};
  }
`;

export const FormLabel = styled.div`
  width: 60%;
  white-space: nowrap;
  
  span{
    color: red;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  height: 70px;
  font-size: 14px;
  text-align center;
  border: none;
  border: ${(props) => (props.isError ? "1px solid red" : "1px solid gray")};
  padding-left: 10px;
  box-sizing: border-box;
  font-family: "Moderat", sans-serif !important;
  line-height: 1.9rem;
    font-weight: 300;
    letter-spacing: 0.1px;
`;

export const FormSelect = styled.select`   
  width: 100%;
  height: 50px;
  font-size: 16px;
  text-align: center;
  border-radius: 0;
  border: ${(props) => (props.isError ? "1px solid red" : "1px solid gray")};
  padding-left: 10px;
  box-sizing: border-box;
  font-family: "Moderat", sans-serif !important;
  line-height: 1.9rem;
    font-weight: 300;
    letter-spacing: 0.1px;
`;

export const FormText = styled.textarea`
  width: 100%;
  border-radius: 0;
  border: ${(props) => (props.isError ? "1px solid red" : "1px solid gray")};
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  ::placeholder{
    text-align: center;
    font-size: 13px;
    font-family: "Moderat", sans-serif !important;
  line-height: 1.9rem;
    font-weight: 300;
    letter-spacing: 0.1px;
  }
`;

export const FileUpload = styled.div`
  border: ${(props) => (props.isError ? "1px dotted red" : "1px dotted gray")};
  padding: 50px;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
  
  span {
    padding: 7px 12px;
    cursor: pointer;
    background: #0a0e27;
    color: white;
    border: none;
    font-family: "Moderat", sans-serif !important;
  line-height: 1.9rem;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.1px;
  }
`;

export const OrderButton = styled.button`
  background: green;
  color: white;
  padding: 15px 55px;
  border-radius: 0;
  border: none;
  cursor: pointer;
  margin-top: 40px;
  font-family: "Moderat", sans-serif !important;
  line-height: 1.9rem;
    font-size: 17px;
    font-weight: 300;
    letter-spacing: 0.1px;
  :hover {
    background: #0a0e27;
    transition: all linear 0.3s;
  }

  :disabled {
    background: #808080;
    cursor: not-allowed;
  }
`;
