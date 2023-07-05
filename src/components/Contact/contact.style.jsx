import styled from "styled-components";

export const ContactContainer = styled.div`
margin-top: 10px;
  p {
    margin-top: 90px;
    text-align: center;
    font-family: "Moderat", sans-serif !important;
    font-weight: 300;
    letter-spacing: 0.1px
    font-size: 15px
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  
  & > div {
    width: 90%;
    display: grid;
    // align-items: start;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 768px) {
      width: 80%;
    }

    @media (max-width: 425px) {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      // width: 100%;
      // padding-left: 35%;
      gap: 40px;
    }
  }
`;

export const ContactListWrapper = styled.div`
  margin-top: 24px;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 900px) {
    gap: 17px;
  }
`;

export const ChannelTitle = styled.div`
  font-size: 21px;
  margin-bottom: 0.5rem;
  line-height: 1.1;
  color: #1d1d1d;
  font-family: "Moderat", sans-serif !important;
`;

export const ChannelItem = styled.a`
  
svg {
    margin-right: 5px;
  }
  
  height: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  // width: fit-content;
  text-align: right;
  color: #1d1d1d;

  font-size: 14px;
  font-family: "Moderat", sans-serif !important;
  font-weight: 100;
`;



export const FooterImg = styled.img`
  position: fixed;
  bottom: 0;
  width: 100px;
  right: 0;
  
  @media (max-width: 900px){
    position: fixed;
    bottom: 0;
    width: 50px;
    right: 0;
  }
`;
