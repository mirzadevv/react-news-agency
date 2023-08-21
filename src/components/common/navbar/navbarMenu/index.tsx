import * as Styled from "./index.styled";
import { Link } from "react-router-dom";

type NavbarMenuProps = {
  verticalAlignment?: boolean;
};

export default function NavbarMenu({ verticalAlignment }: NavbarMenuProps) {
  return (
    <Styled.UL verticalAlignment={verticalAlignment}>
      <Link to="/category/world">
        <li>
          <a>World</a>
        </li>
      </Link>
      <Link to="/category/business">
        <li>
          <a>Business</a>
        </li>
      </Link>
      <Link to="/category/tech">
        <li>
          <a>Tech</a>
        </li>
      </Link>
      <Link to="/category/science">
        <li>
          <a>Science</a>
        </li>
      </Link>
      <Link to="/category/lifestyle">
        <li>
          <a>Lifestyle</a>
        </li>
      </Link>
      <Link to="/category/politics">
        <li>
          <a>Politics</a>
        </li>
      </Link>
    </Styled.UL>
  );
}
