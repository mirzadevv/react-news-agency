import * as Styled from "./index.styled";

export default function NavbarAuthentication() {
  return (
    <Styled.Container>
      <li>
        <a>Login</a>
      </li>
      <li>
        <a className="subscribe-menu-item">Subscribe</a>
      </li>
    </Styled.Container>
  );
}
