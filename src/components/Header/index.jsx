import { Link, useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMenus,
  MenuItem,
  OrderBtn,
  MenuWrapper,
} from "./header.style";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const menuItems = [
  { to: "/", text: "Home" },
  { href: "/#what", text: "What we do" },
  { to: "/contact", text: "Contact us" },
];

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMenu, setShowMenu] = useState(false);

  const handleOrderClick = () => {
    navigate("/order");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderContainer>
      <HeaderMenus>
        <div>
          <Link to="/">
            <HeaderLogo
              src="/assets/image/Header/100710_red_maple_leaf.svg"
              alt=""
            />
          </Link>
          <MenuWrapper showMenu={showMenu}>
            {menuItems.map((item, index) =>
              item.href ? (
                <a key={index} href={item.href}>
                  <MenuItem>{item.text}</MenuItem>
                </a>
              ) : (
                <Link key={index} to={item.to}>
                  <MenuItem>{item.text}</MenuItem>
                </Link>
              )
            )}
            {isMobile && (
              <OrderBtn onClick={handleOrderClick}>
                <span>Order</span>
              </OrderBtn>
            )}
          </MenuWrapper>
        </div>
        {isMobile ? (
          <div>
            <FaBars size={30} onClick={() => setShowMenu(!showMenu)} />
          </div>
        ) : (
          <OrderBtn onClick={handleOrderClick}>
            <span>Order</span>
          </OrderBtn>
        )}
      </HeaderMenus>
    </HeaderContainer>
  );
};

export default HeaderComponent;
