import styled from "styled-components";

export const FaqContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 90px;
`;

export const FaqWrapper = styled.div`
  max-width: 1320px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FaqTitle = styled.div`
  color: rgb(88, 56, 56);
  font-size: 35px;
  text-align: center !important;
  font-weight: 500;
  line-height: 1.2;
`;

export const FaqButton = styled.button`
  cursor: pointer;
  width: fit-content;
  padding: 5px;
  border: 1px solid black;
  background-color: #e8e8e8;

  font-size: 16px;
`;

export const FaqText = styled.div`
  margin: 0;
`;
