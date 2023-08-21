import styled from "styled-components";

export const Container = styled.div`
  font-size: large;
  a {
    color: ${(props) => props.theme.colors.darkBlack};
    font-weight: 500;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;

  .burger-icon {
    display: none;
  }

  .logo-image {
    width: 10%;
    display: flex;
    justify-content: left;
    margin-right: 30px;

    img {
      margin-left: -15px;
    }
  }

  @media (max-width: 1300px) {
    .burger-icon {
      display: flex;
      justify-content: end;
      align-items: center;
      cursor: pointer;
    }
  }

  @media (max-width: 400px) {
    justify-content: right;
    .logo-image {
      display: none;
    }
  }
`;

export const NavListContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1300px) {
    display: none;
  }
`;
