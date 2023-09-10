import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 150px;

  @media (max-width: 900px) {
    padding: 50px 100px;
  }

  @media (max-width: 600px) {
    padding: 50px 50px;
  }
`;
