import * as Styled from "./index.styled";

type NavbarMenuProps = {
  verticalAlignment?: boolean;
};

export default function NavbarMenu({ verticalAlignment }: NavbarMenuProps) {
  return (
    <Styled.UL verticalAlignment={verticalAlignment}>
      <li>
        <a>World</a>
      </li>
      <li>
        <a>Business</a>
      </li>
      <li>
        <a>Tech</a>
      </li>
      <li>
        <a>Science</a>
      </li>
      <li>
        <a>Lifestyle</a>
      </li>
      <li>
        <a>Politics</a>
      </li>
    </Styled.UL>
  );
}
