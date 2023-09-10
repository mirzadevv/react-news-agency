import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 55vh;

  img {
    min-width: 100%;
    display: block;
  }

  .caption {
    position: absolute;
    bottom: 0;
    opacity: 85%;
    padding: 15px 30px;
    background-color: #222;
    color: white;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    font-size: 15px;
  }
  @media (max-width: 1500px) {
    font-size: 13px;
  }
  @media (max-width: 1300px) {
    font-size: 12px;
  }
  @media (max-width: 1000) {
    font-size: 11px;
  }

  .category-title {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.darkWhite};
    margin-bottom: 20px;
  }
  .news-title {
    margin-bottom: 30px;
  }

  .news-info {
    display: flex;
    column-gap: 40px;
    row-gap: 10px;
    flex-wrap: wrap;
  }
`;

export const NewsInfoItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 15px;
  color: ${(props) => props.theme.colors.darkWhite};
`;
