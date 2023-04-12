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

const contactInfo = [
  {
    icon: <BsFillHouseFill />,
    text: "1269 Mcconachie blvd NW Edmonton, AB Canada",
  },
  {
    icon: <FaPhoneAlt />,
    text: "Tel: +167448856784",
  },
  {
    icon: <IoIosMail />,
    text: "Email: abcd@example.com",
  },
];

const handleDownloadClick = () => {
  window.open(`${process.env.PUBLIC_URL}/assets/consent.pdf`, "_blank");
};

const GetInTouchComponent = () => (
  <GetInTouchContainer>
    <GetInTouchWrapper>
      <Title>GET IN TOUCH</Title>
      <Desc>Lorem ipsum dolor. sit amet consectetur adipisicing elit.</Desc>
      <TouchWrapper>
        {contactInfo.map(({ icon, text }) => (
          <>
            <ContactIcon>{icon}</ContactIcon>
            <IconDesc>{text}</IconDesc>
          </>
        ))}
        <DownloadBtn onClick={handleDownloadClick}>
          DOWNLOAD CONSENT FORM
          <span>
            <BsArrowDownRight />
          </span>
        </DownloadBtn>
      </TouchWrapper>
    </GetInTouchWrapper>
  </GetInTouchContainer>
);

export default GetInTouchComponent;
