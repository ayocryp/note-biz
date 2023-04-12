import styled from "styled-components";

export const HeaderContainer = styled.div`
  z-index: 2;
  width: 100%;
  display: flex;
  position: fixed;
  font-size: 18px;
  box-sizing: border-box;
  background-color: rgb(236, 236, 236);
`;

export const HeaderMenus = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`;

export const HeaderLogo = styled.img`
  width: 50px;
  height: auto;
  margin-left: 48px;
  margin-right: 30px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: calc(100% - 40px);
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 70px;
    gap: 10px;
    background-color: rgb(236, 236, 236);
    overflow: hidden;
    height: ${(props) => (props.showMenu ? "205px" : "0px")};
  }
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

  @media (max-width: 768px) {
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
  width: fit-content;
  background-color: rgb(88, 56, 56);
  cursor: pointer;
  padding: 10px 20px;
  font-size: 1.25rem;
  border-radius: 10px;

  :hover {
    box-shadow: 0 5px 10px rgba(29, 29, 29, 0.5);
  }
`;
