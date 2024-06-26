import { useState } from "react";
import * as Styled from "./index.styled";

// import images and icons
import navbarLogoImg from "../../../assets/images/navbarLogoImg.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

// import components
import NavbarAuthentication from "./navbarAuthentication";
import ImageWithReactIcon from "../imageWithReactIcon";
import NavbarMenu from "./navbarMenu";

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [burgerMenuMode, setBurgerMenuMode] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <Styled.Container>
      <Styled.Nav>
        <ImageWithReactIcon
          type="image"
          size={80}
          src={navbarLogoImg}
          className="logo-image"
          onClick={() => navigate("/")}
        />

        <Styled.NavListContainer>
          <NavbarMenu />
          <NavbarAuthentication />
        </Styled.NavListContainer>

        <ImageWithReactIcon
          type="icon"
          size={50}
          src={HiOutlineMenu}
          className="burger-icon"
          toggledSrc={HiOutlineX}
          toggleMode={burgerMenuMode}
          onClick={() => setBurgerMenuMode(!burgerMenuMode)}
        />

        {burgerMenuMode && <NavbarMenu verticalAlignment={true} />}
      </Styled.Nav>
    </Styled.Container>
  );
}
