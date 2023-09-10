import * as Styled from "./index.styled";

// import images and icons
import sliderImage from "../../../assets/images/sliderImg.webp";
import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";

export default function NewsCard() {
  return (
    <Styled.Container>
      <img src={sliderImage} />
      <div className="caption">
        <h4 className="category-title">Politics</h4>
        <h1 className="news-title">
          Texas: The red state Democrats continuously dream of turning blue, but
          keep falling short
        </h1>
        <div className="news-info">
          <Styled.NewsInfoItem>
            <AiOutlineUser />
            <p> Eqbal </p>
          </Styled.NewsInfoItem>
          <Styled.NewsInfoItem>
            <MdOutlineDateRange />
            <p> 09/09/2023 </p>
          </Styled.NewsInfoItem>
          <Styled.NewsInfoItem>
            <FaRegComments />
            <p> No Comments </p>
          </Styled.NewsInfoItem>
        </div>
      </div>
    </Styled.Container>
  );
}
