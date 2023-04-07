import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactListWrapper,
  ChannelTitle,
  ChannelItem,
  FooterImg,
} from "./contact.style";

import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

const ContactComponent = () => {
  return (
    <ContactContainer>
      <ContactWrapper>
        <ContactListWrapper>
          <ChannelTitle>Contact us</ChannelTitle>
          <ChannelItem>
            <AiOutlineTwitter />
            Twitter
          </ChannelItem>
          <ChannelItem>
            <FaTelegram />
            Telegram
          </ChannelItem>
          <ChannelItem>
            <AiOutlineInstagram />
            Instagram
          </ChannelItem>
        </ContactListWrapper>
        <ContactListWrapper>
          <ChannelTitle>Updates</ChannelTitle>
          <ChannelItem>CIBC news</ChannelItem>
          <ChannelItem>Study Visa</ChannelItem>
          <ChannelItem>Permanent Residence</ChannelItem>
        </ContactListWrapper>
        <ContactListWrapper>
          <ChannelTitle>Order your notes</ChannelTitle>
          <ChannelItem>CIBC news</ChannelItem>
          <ChannelItem>Study Visa</ChannelItem>
          <ChannelItem>Permanent Residence</ChannelItem>
        </ContactListWrapper>
      </ContactWrapper>
      <FooterImg src="/assets/image/Header/100710_red_maple_leaf.svg" alt="" />
    </ContactContainer>
  );
};

export default ContactComponent;
