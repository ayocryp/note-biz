import React from "react";

import {
  ContactIcon,
  Desc,
  DownloadBtn,
  GetInTouchContainer,
  GetInTouchWrapper,
  IconDesc,
  Title,
  TouchWrapper,
} from "./touch.style";

import { BsArrowDownRight, BsFillHouseFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const GetInTouchComponent = () => {
  return (
    <GetInTouchContainer>
      <GetInTouchWrapper>
        <Title>GET IN TOUCH</Title>
        <Desc>Lorem ipsum dolor. sit amet consectetur adipisicing elit.</Desc>
        <TouchWrapper>
          <ContactIcon>
            <BsFillHouseFill />
          </ContactIcon>
          <IconDesc>1269 Mcconachie blvd NW Edmonton, AB Canada</IconDesc>
          <ContactIcon>
            <FaPhoneAlt />
          </ContactIcon>
          <IconDesc>Tel: +167448856784</IconDesc>
          <ContactIcon>
            <IoIosMail />
          </ContactIcon>
          <IconDesc>Email: abcd@example.com</IconDesc>
          <DownloadBtn>
            DOWNLOAD CONSENT FORM
            <span>
              <BsArrowDownRight />
            </span>
          </DownloadBtn>
        </TouchWrapper>
      </GetInTouchWrapper>
    </GetInTouchContainer>
  );
};

export default GetInTouchComponent;
