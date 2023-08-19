import styled from "styled-components";

type ULProps = {
  verticalAlignment?: boolean;
};

export const UL = styled.ul<ULProps>`
  ${(props) => {
    if (props.verticalAlignment) {
      return `
      position: absolute;
      top: 120%;
      padding: 10px;
      width: calc(100% - 20px);
      background-color: #fff;
      box-shadow: 2px 2px 4px gray;
      `;
    } else {
      return `
      display: flex;
      align-items: center;
      column-gap: 30px;
      row-gap: 10px;
      flex-wrap: wrap;
      `;
    }
  }}
`;
