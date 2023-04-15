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

const ContactList = ({ title, children }) => (
  <ContactListWrapper>
    <ChannelTitle>{title}</ChannelTitle>
    {children}
  </ContactListWrapper>
);

const IconChannelItem = ({ icon: Icon, label }) => (
  <ChannelItem>
    <Icon />
    {label}
  </ChannelItem>
);

const ContactComponent = () => {
  return (
    <ContactContainer>
      <ContactWrapper>
        <div>
          <ContactList title="Contact us">
            <IconChannelItem icon={AiOutlineTwitter} label="Twitter" />
            <IconChannelItem icon={FaTelegram} label="Telegram" />
            <IconChannelItem icon={AiOutlineInstagram} label="Instagram" />
          </ContactList>
          <ContactList title="Updates">
            <ChannelItem>CIBC news</ChannelItem>
            <ChannelItem>Study Visa</ChannelItem>
            <ChannelItem>Permanent Residence</ChannelItem>
          </ContactList>
          <ContactList title="Order your notes">
            <ChannelItem>CIBC news</ChannelItem>/
            <ChannelItem>Study Visa</ChannelItem>
            <ChannelItem>Permanent Residence</ChannelItem>
          </ContactList>
        </div>
      </ContactWrapper>
      <FooterImg src="/assets/image/Header/100710_red_maple_leaf.svg" alt="" />
    </ContactContainer>
  );
};

export default ContactComponent;
