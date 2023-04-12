import styled from "styled-components";

export const GetInTouchContainer = styled.div`
  padding: 15% 10%;
  display: flex;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.752), rgba(0, 0, 0, 0.762)),
    url("/assets/Image/GetInTouch/Optimized-pexels-andrea-piacquadio-3769138.jpeg")
      no-repeat;
  background-size: cover;
  background-position: center;
`;

export const GetInTouchWrapper = styled.div`
  padding: 8%;
  border-radius: 7px;
  background: rgba(39, 15, 15, 0.9);
  max-width: 968px;
  width: 100%;
  box-sizing: border-box;
`;

export const Title = styled.div`
  font-size: 40px;
  color: white;
  text-align: center;
  margin: 0px 0px 15px;
  padding: 0px 0px 10px;
`;

export const Desc = styled.div`
  font-size: 18px;
  color: white;
  text-align: center;
  margin: 0px 0px 18px;
  padding: 0px 0px 30px;
`;

export const TouchWrapper = styled.div`
  color: rgba(39, 15, 15, 0.9);
  background: white;
  padding: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const IconDesc = styled.div`
  text-align: center;
`;

export const DownloadBtn = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 12px 18px;
  border-radius: 10px;
  background-color: rgb(39, 15, 15);
  color: white;
  margin-top: 50px;
  span {
    margin-left: 3px;
    display: flex;
    width: 14px;
    height: 14px;
    align-items: center;
    background-color: white;
    border-radius: 2px;
    font-size: 8px;
    color: black;
    justify-content: center;
  }

  :hover {
    box-shadow: 0 5px 10px rgba(29, 29, 29, 0.5);
  }
`;

export const ContactIcon = styled.div`
  font-size: 25px;
  padding-right: 8px;
  color: rgba(39, 15, 15, 0.9);
  margin-top: 50px;
`;
