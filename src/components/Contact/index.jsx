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
            <IconChannelItem icon={AiOutlineInstagram} label="TikTok" />
            <IconChannelItem icon={AiOutlineInstagram} label="Linkedln" />
          </ContactList>
          <ContactList title="Other services">
            <ChannelItem>Admissions</ChannelItem>
            <ChannelItem>Study Visa</ChannelItem>
            <ChannelItem>Permanent Residence</ChannelItem>
            <ChannelItem>Privacy</ChannelItem>
            
          </ContactList>
          <ContactList title="News">
            <ChannelItem>CIBC news</ChannelItem>
            <ChannelItem>Study Visa</ChannelItem>
            <ChannelItem>Permanent Residence</ChannelItem>
            <ChannelItem>Work visa</ChannelItem>
            <ChannelItem>Travel news</ChannelItem>
          </ContactList>
          <ContactList title="Payment">
            <ChannelItem>Terms</ChannelItem>
            <ChannelItem>FAQ</ChannelItem>
            <ChannelItem>Privacy</ChannelItem>
            <ChannelItem>IRCC</ChannelItem>
          </ContactList>
        </div>
      </ContactWrapper>
      <p>All right reserved &copy; 2023 Limitless </p>
      <FooterImg src="/assets/image/Header/100710_red_maple_leaf.svg" alt="" />
    </ContactContainer>
  );
};

export default ContactComponent;
