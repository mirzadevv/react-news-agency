import styled from "styled-components";

type ULProps = {
  verticalAlignment?: boolean;
};

export const UL = styled.ul<ULProps>`
  li a {
    &:hover {
      color: ${(props) => props.theme.colors.purple};
    }
  }
  ${(props) => {
    if (props.verticalAlignment) {
      return `
      position: absolute;
      top: 120%;
      display:flex;
      flex-direction: column;
      row-gap:30px;
      padding: 30px 20px;
      width: calc(100% - 40px);
      background-color: #fff;
      box-shadow: 2px 2px 4px gray;
      li {
        text-align:left;
      }
      `;
    } else {
      return `
      display: flex;
      align-items: center;
      column-gap: 35px;
      flex-wrap: wrap;
      `;
    }
  }}
`;
