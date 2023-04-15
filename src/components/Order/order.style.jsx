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
  justify-content: center;
  text-decoration: none;
  padding: 12px 18px;
  border-radius: 10px;
  background-color: #fb9129;
  color: white;
  margin-top: 50px;
  span {
    margin-left: 3px;
    display: flex;
    width: 14px;
    height: 14px;
    align-items: center;
    background-color: white;
    border-radius: 2px;
    font-size: 8px;
    color: black;
    justify-content: center;
  }

  :hover {
    box-shadow: 0 5px 10px rgba(29, 29, 29, 0.5);
  }
  margin-bottom: 20px;
`;

export const OrderContainer = styled.div`
  padding: 150px 0;
  display: flex;
  justify-content: center;
  background: radial-gradient(#6e6e6e, #000000);

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
  border-radius: 7px;
  background: #0a0e27;
  max-width: 80%;
  width: 100%;
  box-sizing: border-box;
`;

export const Title = styled.div`
  font-size: 40px;
  color: white;
  text-align: center;
  margin: 0px 0px 15px;
  padding: 0px 0px 10px;
`;

export const Desc = styled.div`
  font-size: 18px;
  color: white;
  text-align: center;
  margin: 0px 0px 18px;
  padding: 0px 0px 30px;
`;

export const NoteWrapper = styled.div`
  color: #0a0e27;
  background: white;
  padding: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const GroupWrapper = styled.div`
  width: 100%;
`;

export const GroupTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
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
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  height: 30px;
  font-size: 16px;
  border-radius: 5px;
  border: ${(props) => (props.isError ? "1px solid red" : "1px solid gray")};
  padding-left: 10px;
  box-sizing: border-box;
`;

export const FormSelect = styled.select`
  width: 100%;
  height: 30px;
  font-size: 16px;
  border-radius: 5px;
  border: ${(props) => (props.isError ? "1px solid red" : "1px solid gray")};
  padding-left: 10px;
  box-sizing: border-box;
`;

export const FormText = styled.textarea`
  width: 100%;
  font-size: 16px;
  height: 100px;
  border-radius: 5px;
  border: ${(props) => (props.isError ? "1px solid red" : "1px solid gray")};
  padding: 10px;
  box-sizing: border-box;
`;

export const FileUpload = styled.div`
  border: ${(props) => (props.isError ? "1px dotted red" : "1px dotted gray")};
  padding: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 15px;
    cursor: pointer;
  }
`;

export const OrderButton = styled.button`
  background: #0a0e27;
  color: white;
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
  :hover {
    box-shadow: 0 5px 10px rgba(29, 29, 29, 0.5);
  }
`;
