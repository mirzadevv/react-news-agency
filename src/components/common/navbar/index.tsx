import { useState } from "react";
import * as Styled from "./index.styled";

// import images and icons
import navbarLogoImg from "../../../assets/images/navbarLogoImg.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

// import components
import NavbarAuthentication from "./navbarAuthentication";
import ImageWithReactIcon from "../imageWithReactIcon";
import NavbarMenu from "./navbarMenu";

export default function Navbar() {
  const [burgerMenuMode, setBurgerMenuMode] = useState<boolean>(false);
  return (
    <Styled.Container>
      <Styled.Nav>
        <ImageWithReactIcon
          type="image"
          src={navbarLogoImg}
          className="logo-image"
          size={80}
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
