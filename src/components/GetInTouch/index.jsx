import React from "react";
import {
  ContactIcon,
  Desc,
  GetInTouchContainer,
  GetInTouchWrapper,
  IconDesc,
  Title,
  TouchWrapper,
} from "./touch.style";

import { BsFillHouseFill } from "react-icons/bs";
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

const GetInTouchComponent = () => (
  <GetInTouchContainer>
    <GetInTouchWrapper>
      <Title>GET IN TOUCH</Title>
      <Desc>Lorem ipsum dolor. sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates modi voluptatem debitis officia? Corrupti, doloremque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, rerum!</Desc>
      <TouchWrapper>
        {contactInfo.map(({ icon, text }, index) => (
          <div key={index}>
            <ContactIcon>{icon}</ContactIcon>
            <IconDesc>{text}</IconDesc>
          </div>
        ))}
      </TouchWrapper>
    </GetInTouchWrapper>
  </GetInTouchContainer>
);

export default GetInTouchComponent;
