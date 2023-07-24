import Slider from "react-slick";

// styles
import { Col, Row } from "react-bootstrap";
import "./index.scss";
import { SampleNextArrow, SamplePrevArrow } from "../arrowLeftRight";
import Chennai from "../../assets/images/chennai.jpg";
import Banglore from "../../assets/images/banglore.jpg";
import Kodaikanal from "../../assets/images/kodaikannal.webp";
import Pondicheri from "../../assets/images/pondicherry.jpg";
import Rameswaram from "../../assets/images/ramanathapuram.jpg";
import Courtallam from "../../assets/images/Courtallam2.webp";

const click = () => {
  window.alert("working");
};

const PopularDestination = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "sliderDiv fleetArrow",
    responsive: [
      {
        breakpoint: 990,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="container-fluid my-1">
      <Row>
        <Col lg={12} sm={12}>
          <div className="center-heading">
            <h2 className="text-center" style={{ color: "#6bb546" }}>
              Popular Destinations
            </h2>
          </div>
        </Col>
      </Row>
      <Row className="my-1 mt-3 py-4 justify-content-center">
        <Col lg={8} md={8} sm={10} className="mx-1">
          <div>
            <Slider {...settings} autoplay={false}>
              <Row className={"spaceBtm"}>
                <Col lg={6} sm={12}>
                  <img
                    style={{ padding: "1px" }}
                    alt="image"
                    className="img-fluid"
                    src={Chennai}
                  />
                </Col>
                <Col lg={6} sm={12} className="orderOne">
                  <h4 className="text-center">CHENNAI</h4>
                  <p>
                    "Chennai, the capital of Tamil Nadu in eastern India, lies
                    on the Bay of Bengal. Marina Beach is a natural urban beach
                    along the Bay of Bengal, the second-largest in the world,
                    and the most crowded in India, attracting nearly 30,000
                    visitors daily. The Government Museum is the country's
                    second oldest museum. Among the best tourist spots are the
                    magnificent Marundeeswarar Temple, Vandalur Zoo, Senthamizh
                    Poonga, and Mahabalipuram."
                  </p>
                </Col>
              </Row>
              <Row className={"spaceBtm"}>
                <Col lg={6} sm={12} className="orderOne">
                  <h4 className="text-center">BANGALORE</h4>
                  <p>
                    "Bangalore, India's Silicon Valley, is famous for its
                    high-tech industry, picturesque parks, and vibrant
                    nightlife. The city boasts tranquil lakes, ancient trees,
                    splendid gardens, and refreshing summer showers. It ranks
                    12th in India for cleanliness. Once called the "Garden City
                    of India" and the "Pensioner's Paradise," Bangalore
                    transformed into a bustling cosmopolitan metropolis, with
                    diminishing green spaces and a thriving working population."
                  </p>
                </Col>
                <Col lg={6} sm={12}>
                  <img
                    style={{ padding: "1px" }}
                    alt="image"
                    width="100%"
                    src={Banglore}
                  />
                </Col>
              </Row>
              <Row className={"spaceBtm"}>
                <Col lg={6} sm={12}>
                  <img
                    style={{ padding: "1px" }}
                    alt="image"
                    width="100%"
                    src={Kodaikanal}
                  />
                </Col>
                <Col lg={6} sm={12} className="orderOne">
                  <h4 className="text-center">KODAIKANNAL</h4>
                  <p>
                    Kodaikanal, located in Tamil Nadu, is a scenic hill town
                    known for its granite cliffs, forested valleys, lakes,
                    waterfalls, and grassy hills. It was established as a
                    retreat for the British seeking relief from the hot summers.
                    Nestled amidst the cloud-capped peaks of the Western Ghats'
                    Palani Hills and offering soothing views of the rolling
                    green valley, Kodaikanal is often hailed as a divine
                    blessing due to its captivating beauty
                  </p>
                </Col>
              </Row>
              <Row className={"spaceBtm"}>
                <Col lg={6} sm={12} className="orderOne">
                  <h4 className="text-center">PONDICHERRY</h4>
                  <p>
                    {" "}
                    Aurobindo Ashram and Auroville attracting thousands of
                    tourists to explore this beautiful city. For nature lovers
                    too, Pondicherry is a serene retreat replete with various
                    beaches and lakes that takes the breath away of the tourists
                    on the first glimpse. Scuba Diving, Paradise Beach,
                    Promenade, Serenity Beach, Arikamedu, Auroville Beach and
                    Boathouse are the best spots in Pondicherry.
                  </p>
                </Col>
                <Col lg={6} sm={12}>
                  <img
                    style={{ padding: "1px" }}
                    alt="image"
                    width="100%"
                    src={Pondicheri}
                  />
                </Col>
              </Row>
              <Row className={"spaceBtm"}>
                <Col lg={6} sm={12}>
                  <img
                    style={{ padding: "1px" }}
                    alt="image"
                    width="100%"
                    src={Rameswaram}
                  />
                </Col>
                <Col lg={6} sm={12} className="orderOne">
                  <h4 className="text-center">RAMESWARAM</h4>
                  <p>
                    "Nadu is renowned for the Ramanathaswamy Temple, one of the
                    twelve Jyotirlingas of Lord Shiva in India. As the
                    southernmost 'jyotirlinga,' it ranks among the top religious
                    destinations in the country. Rameswaram welcomes visitors
                    year-round, with attractions like the House of Kalam,
                    Dhanush Kodi, and Aryaman Beach."
                  </p>
                </Col>
              </Row>
              <Row className={"spaceBtm3"}>
                <Col lg={6} sm={12} className="orderOne">
                  <h4 className="text-center">COURTALLAM</h4>
                  <p>
                    Courtallam or Kuttalam, Spa of South India. The falls carry
                    a good amount of water only when there is a rain on the
                    hills. The season begins from June of every year till
                    September. The South West Monsoon brings in the cold breeze
                    with mild temperature. Five falls, old coutrallam falls,
                    Tiger falls, Main falls and Chitraruvi are the best and
                    famous falls to bath.
                  </p>
                </Col>
                <Col lg={6} sm={12}>
                  <img
                    style={{ padding: "1px" }}
                    alt="image"
                    width="100%"
                    src={Courtallam}
                  />
                </Col>
              </Row>
            </Slider>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PopularDestination;
