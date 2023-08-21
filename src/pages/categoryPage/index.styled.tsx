import styled from "styled-components";

export const Container = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  margin-top: 100px;

  .category-title {
    text-transform: uppercase;
    font-family: ${(props) => props.theme.fonts.inter};
  }
`;
