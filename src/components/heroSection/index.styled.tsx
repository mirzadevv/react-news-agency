import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 58% 38%;
  height: 55vh;
  gap: 4%;
  padding-bottom: 50px;

  @media (max-width: 1500px) {
    grid-template-columns: 100%;
    gap: 70px;
  }

  .slider {
    .slick-next:before,
    .slick-prev:before {
      color: ${(props) => props.theme.colors.purple};
    }
  }
  .envelope-icon {
    color: ${(props) => props.theme.colors.purple};
    a {
      cursor: default;
    }
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  gap: 30px;

  .day-quotes {
    h2 {
      margin-bottom: 27px;
    }
    .quotes-content {
      margin-bottom: 25px;

      p {
        margin-bottom: 10px;
      }
    }
  }

  @media (max-width: 850px) {
    .day-quotes {
      display: none;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 20%;
  border: 1px solid #4c455f;
  gap: 25px;
  padding: 20px 30px;
`;
