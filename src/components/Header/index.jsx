import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  HeaderContainer,
  HeaderLogo,
  HeaderMenus,
  MenuItem,
  OrderBtn,
  MenuWrapper,
  SubOrder,
} from "./header.style";

// react icons
import { FaBars } from "react-icons/fa";

const HeaderComponent = () => {
  const [menuState, setMenuState] = useState(false);
  const [flag, setFlag] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setFlag(location.pathname === "/contact" || location.pathname === "/order");
  }, [location]);

  return (
    <HeaderContainer>
      <HeaderMenus>
        <Link to="/">
          <HeaderLogo
            src="/assets/image/Header/100710_red_maple_leaf.svg"
            alt=""
          />
        </Link>
        <MenuWrapper state={menuState}>
          <Link to="/">
            <MenuItem>Home</MenuItem>
          </Link>
          <a href="/#what">
            <MenuItem>What we do</MenuItem>
          </a>
          <a href="/#pricing">
            <MenuItem>Pricing</MenuItem>
          </a>
          <Link to="/contact">
            <MenuItem>Contact us</MenuItem>
          </Link>
          <SubOrder>Order</SubOrder>
        </MenuWrapper>
      </HeaderMenus>
      {!flag && (
        <OrderBtn
          onClick={() => {
            setMenuState(!menuState);
            navigate("/order");
          }}
        >
          <span>Order</span>
          <div>
            <FaBars />
          </div>
        </OrderBtn>
      )}
    </HeaderContainer>
  );
};

export default HeaderComponent;
