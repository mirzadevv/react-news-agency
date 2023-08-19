import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  padding: 10px;
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

  @media (max-width: 1300px) {
    .burger-icon {
      display: flex;
      justify-content: end;
      align-items: center;
      cursor: pointer;
    }
  }
`;

export const navListContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 1300px) {
    display: none;
  }
`;
