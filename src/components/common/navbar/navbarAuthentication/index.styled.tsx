import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  column-gap: 30px;

  .subscribe-menu-item {
    color: ${(props) => props.theme.colors.purple};
  }
`;
