import styled from "styled-components";

export const ContactContainer = styled.div`
  position: relative;
  background-color: #e2e2e2;
  padding: 48px;
`;

export const ContactWrapper = styled.div`
  max-width: 1320px;
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ContactListWrapper = styled.div`
  margin-top: 24px;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
`;

export const ChannelTitle = styled.div`
  font-size: 21px;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
`;

export const ChannelItem = styled.a`
  svg {
    margin-right: 5px;
  }
  height: 24px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: black;
  width: fit-content;
  text-align: center;
  font-weight: 300;
`;
export const FooterImg = styled.img`
  position: fixed;
  bottom: 0;
  width: 100px;
  right: 0;
`;
