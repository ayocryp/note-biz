import styled from "styled-components";

export const ContactContainer = styled.div`
  p {
    margin-top: 70px;
    text-align: center;
    font-family: "Moderat", sans-serif !important;
   font-weight: 200;
  }
  
  position: relative;
  background-color: #e2e2e2;
  padding: 48px 0;
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
   

  & > div {
    width: 60%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ContactListWrapper = styled.div`
  margin-top: 24px;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ChannelTitle = styled.div`
  font-size: 21px;
  margin-bottom: 0.5rem;
  font-weight: 400;
  line-height: 1.2;
  color: #1d1d1d;
  font-family: "Moderat", sans-serif !important;
  font-weight: 100;
`;

export const ChannelItem = styled.a`
  svg {
    margin-right: 5px;
  }
  height: 35px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: black;
  width: fit-content;
  text-align: center;
  color: #1d1d1d;
  font-size: 15px;
  font-family: "Moderat", sans-serif !important;
  font-weight: 100;
`;
export const FooterImg = styled.img`
  position: fixed;
  bottom: 0;
  width: 100px;
  right: 0;
`;
