import "./index.scss";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Car1 from "../../assets/images/car_suv.png";
import Car2 from "../../assets/images/car_sedan.png";
import Car3 from "../../assets/images/car_suv_innova.png";
import Car4 from "../../assets/images/car_suv_innova_crysta.png";
import Car5 from "../../assets/images/car_mini.png";
import Car6 from "../../assets/images/car_tempo.png";

const OfferSections = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    swipe: true,
    swipeToSlide: true,
    className: "commonSlider",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="container section" id="offer-section">
      <h2 id="offers" className="text-center mt-md-5 mt-4">
        Great <span style={{ color: "#6bb546" }}>Offers</span> For You
      </h2>
      <h2 className="text-center mt-4">
        Picco's <span style={{ color: "#6bb546" }}>Fleet</span>
      </h2>
      <Slider {...settings}>
        <div className="card">
          <div className="fleet_car">
            <img src={Car1} className="img-fluid m-auto" alt="car_mini" />
          </div>
          <h5 className="cardTitle">Spacious SUV</h5>
          <p>Peppy Hatchbacks for quick and pocket friendly rides.</p>
        </div>
        <div className="card">
          <div className="fleet_car">
            <img src={Car2} className="img-fluid m-auto" alt="car_sedan" />
          </div>
          <h5 className="cardTitle">Executive Sedan</h5>
          <p>
            Comfortable family cars for touring with spacious and entertainment
          </p>
        </div>
        <div className="card">
          <div className="fleet_car">
            <img src={Car3} className="img-fluid m-auto" alt="car_suv" />
          </div>
          <h5 className="cardTitle">Innova</h5>
          <p>Big Space , Big Trips with more people and more things.</p>
        </div>
        <div className="card">
          <div className="fleet_car">
            <img src={Car4} className="img-fluid m-auto" alt="car_suv_innova" />
          </div>
          <h5 className="cardTitle">Innova crysta</h5>
          <p>
            People's favorite, safest, and most comfortable vehicle ever made.
          </p>
        </div>
        <div className="card">
          <div className="fleet_car">
            <img
              src={Car5}
              className="img-fluid m-auto"
              alt="car_suv_innova_crysta"
            />
          </div>
          <h5 className="cardTitle">Compact Mini</h5>
          <p>
            Travel with the king of roads. Vehicle built with Luxury Comfort.
          </p>
        </div>
        <div className="card">
          <div className="fleet_car">
            <img src={Car6} className="img-fluid m-auto" alt="car_tempo" />
          </div>
          <h5 className="cardTitle">Tempo</h5>
          <p>Designed for group travels with semi sleeper push back seats.</p>
        </div>
      </Slider>
    </div>
  );
};

export default OfferSections;
