import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import useMediaQuery from '../../../hooks/useMediaQuery';
import useMediaQuery from "../../hooks/useMediaQuery";

import "./index.scss";

import SB1 from "../../assets/images/B1.jpg";
import SB2 from "../../assets/images/B2.jpg";
import SB3 from "../../assets/images/B3.jpg";

import B1 from "../../assets/images/banner_desktop1.webp";
import B2 from "../../assets/images/banner_desktop2.webp";
import B3 from "../../assets/images/banner_desktop3.webp";

export default function HomeBanner() {
  const isSmall = useMediaQuery("(min-width: 600px)");
  return (
    <div className={"carousel slide margin-top-big"}>
      <Slider arrows={false} speed={750} autoplay fade>
        <div className="carouselItem">
          <img
            className="carouselImg"
            src={isSmall ? B1 : SB1}
            alt="PiccoCabs"
          />
        </div>
        <div className="carouselItem">
          <img
            className="carouselImg"
            src={isSmall ? B2 : SB2}
            alt="PiccoCabs"
          />
        </div>
        <div className="carouselItem">
          <img
            className="carouselImg"
            src={isSmall ? B3 : SB3}
            alt="PiccoCabs"
          />
        </div>
      </Slider>
    </div>
  );
}
