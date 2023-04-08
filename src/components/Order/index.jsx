import React from "react";
import {
  Desc,
  GroupWrapper,
  GruopTitle,
  NoteWrapper,
  OrderContainer,
  OrderWrapper,
  Title,
} from "./order.style";
// import { Particles } from "../Particles/dist/particle.min";

const OrderComponent = () => {
  return (
    <OrderContainer>
      {/* <Particles /> */}
      <OrderWrapper>
        <Title>Get your notes</Title>
        <Desc>
          Please provide the following information to process your request.
          Enter any other information in the Additional Notes section. After
          submitting this form you will be taken to complete the Payment.
        </Desc>
        <NoteWrapper>
          <GroupWrapper>
            <GruopTitle>PRIMARY APPLICANT</GruopTitle>
          </GroupWrapper>
          <GroupWrapper>
            <GruopTitle>SPOUSE or PARTNER</GruopTitle>
          </GroupWrapper>
          <GroupWrapper>
            <GruopTitle>APPLICANT INFO</GruopTitle>
          </GroupWrapper>
        </NoteWrapper>
      </OrderWrapper>
    </OrderContainer>
  );
};

export default OrderComponent;
