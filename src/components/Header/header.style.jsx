import styled from "styled-components";

export const HeaderContainer = styled.nav`
  background-color: rgb(236, 236, 236);
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 5px 0;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  width: 100%;

  box-sizing: border-box;
`;

export const HeaderLogo = styled.img`
  width: 50px;
  height: auto;
  margin-left: 48px;
  margin-right: 30px;
`;

export const HeaderMenus = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.div`
  color: rgba(0, 0, 0, 0.55);
  cursor: pointer;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  transition: all 0.3s ease-in-out;
  :hover {
    border-bottom: 3px solid rgb(88, 56, 56);
    padding-bottom: 12px;
  }
  @media (max-width: 980px) {
    padding: 10px 0;
    width: 100%;
    :hover {
      border-bottom: 3px solid rgb(88, 56, 56);
      padding: 3px 0;
    }
  }
`;

export const OrderBtn = styled.div`
  color: rgb(255, 255, 255);
  border: none;
  background-color: rgb(88, 56, 56);
  border-radius: 7px;
  div {
    display: none;
  }
  height: fit-content;
  padding: 8px;
  cursor: pointer;
  :hover {
    padding: 5px 8px;
    box-shadow: 0 5px 10px rgba(29, 29, 29, 0.5);
  }
  transition: all 0.3s ease-in-out;
  margin-right: 48px;

  @media (max-width: 980px) {
    color: rgba(0, 0, 0, 0.55);
    border: 1px solid;
    font-size: 25px;
    border-color: rgba(0, 0, 0, 0.1);
    background: transparent;
    div {
      display: flex;
    }
    span {
      display: none;
    }
    :hover {
      padding: 8px;
    }
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  a {
    text-decoration: none;
  }
  @media (max-width: 980px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 67px;
    background-color: rgb(236, 236, 236);
    overflow: hidden;
    width: calc(100% - 96px);
    padding: 0 48px;
    height: ${(props) => (props.state ? "205px" : "0px")};
  }
`;

export const SubOrder = styled.div`
  display: none;

  @media (max-width: 980px) {
    color: rgb(255, 255, 255);
    display: flex;
    background-color: rgb(88, 56, 56);
    border: none;
    border-radius: 7px;
    height: fit-content;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: calc(100% - 20px);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :hover {
      padding: 0 10px;
    }
  }
`;
