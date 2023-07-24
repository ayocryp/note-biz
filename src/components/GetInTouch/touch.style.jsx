import styled from "styled-components";

export const GetInTouchContainer = styled.div`
  padding:  6% 18% 18%;
  display: flex;
  justify-content: center;
  background: url(./assets/Image/GetInTouch/4568.jpg);
  background-position:  bottom;
  background-repeat: no-repeat;
  background-size: 450px;

  @media (max-width: 900px) {
    padding:  35% 5%;
    
    font-size: 14px;
    background-size: 145px;
  }
`;

export const GetInTouchWrapper = styled.div`
  padding: 4%;
  border-radius: 2px;
  border: none;
  // background: black;
  max-width: 968px;
  width: 100%;
  box-sizing: border-box;

  
`;

export const Title = styled.div`
  font-size: 40px;
  color: #090E27;
  text-align: center;
  margin: 0px 0px 15px;
  padding: 0px 0px 10px;
  font-family: "Millik", sans-serif !important;

  @media (max-width: 900x){
    font-size: 10px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  color: #090E27;
  text-align: center;
  line-height: 1.8rem;
  font-family: "Moderat", sans-serif !important;
  font-weight: 300;
  letter-spacing: 0.1px;
  word-break: break-all;
  
`;

export const TouchWrapper = styled.div`
  color: black;
  background: #CAEFFF;
  padding: 30px 0 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 65px;

  @media(max-width: 900px){
    padding: 30px 5px;
  }
`;

export const IconDesc = styled.div`
  text-align: center;
  color: black;
  line-height: 1.9rem;
  font-family: "Moderat", sans-serif !important;
  font-weight: 300;
  letter-spacing: 0.8px;
`;

export const ContactIcon = styled.div`
  font-size: 40px;
  // color: #F6CA59;
  color: #242F4F;
  margin-top: 50px;
`;
