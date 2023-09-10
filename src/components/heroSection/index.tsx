import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import * as Styled from "./index.styled";

// import icons
import ImageWithReactIcon from "../common/imageWithReactIcon";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { LuQuote } from "react-icons/lu";

// import components
import Slider from "react-slick";
import NewsCard from "../common/newsCard";

const sliderSetting = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
};

export default function HeroSection() {
  return (
    <Styled.Container>
      <Slider className="slider" {...sliderSetting}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Slider>
      <Styled.BoxContainer>
        <Styled.Box>
          <ImageWithReactIcon
            type="icon"
            size={40}
            src={BsFillEnvelopeFill}
            className="envelope-icon"
          />
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Get the latest news, updates, and exclusive offers delivered to your
            inbox.
          </p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </Styled.Box>

        <Styled.Box className="day-quotes">
          <ImageWithReactIcon
            type="icon"
            size={40}
            src={LuQuote}
            className="envelope-icon"
          />
          <h2>Day Quotes</h2>
          <div className="quotes-content">
            <p>
              - Success is the sum of small efforts - repeated day in and day
              out.
            </p>
            <h5>Robert Collier</h5>
          </div>
          <div>
            <p style={{ marginBottom: "10px" }}>
              - With the new day comes new strength and new thoughts. Read more
              at
            </p>
            <h5>Eleanor Roosevelt</h5>
          </div>
        </Styled.Box>
      </Styled.BoxContainer>
    </Styled.Container>
  );
}
