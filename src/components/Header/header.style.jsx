import styled from 'styled-components'

export const HeaderContainer = styled.div`
  z-index: 2;
  width: 100%;
  display: flex;
  position: fixed;
  font-size: 18px;
  box-sizing: border-box;
  background-color: rgb(236, 236, 236);

  @media (max-width: 900px){
    width: 100%;
  }
`

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
`

export const HeaderLogo = styled.img`
  width: 50px;
  height: auto;
  margin-left: 60px;
  margin-right: 30px;
`

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
    top: 80px;
    gap: 10px;
    background-color: rgb(236, 236, 236);
    overflow: hidden;
    height: ${(props) => (props.showMenu ? '280px' : '0px')};
  }
`

export const MenuItem = styled.div`
  color: #262c55;
  cursor: pointer;
  display: block;
  font-size: 1.15rem;
  font-family: 'Moderat', sans-serif !important;
  font-weight: 500;
  justify-content: flex-start;
  line-height: 1.8rem;
  letter-spacing: 1px;
  padding: 1rem 1.2rem;
`

export const OrderBtn = styled.div`
  color: rgb(255, 255, 255);
  background-color: green;
  cursor: pointer;
  padding: 10px 35px;
  font-size: 1rem;
  font-family: 'Moderat', sans-serif !important;
  font-weight: 100;
  letter-spacing: 0.8px;
  border-radius: 3px;

  :hover {
    background: black;
    color: white;
    transition: all linear 0.4s;
  }
`
