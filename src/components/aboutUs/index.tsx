import React from "react";
import { Col, Row, Button, Container } from "react-bootstrap";
import "./intex.scss";
// import carimg from "../../assets/images/curly-haired-businessman-will-discuss-conference-car.jpg";
// import carimg from "../../assets/images/taxidriver.jpg";
// import carimg from "../../assets/images/car-gif.gif";
import carimg from "../../assets/images/B1.jpg";

const AboutUs = () => (
  <div className="container my-3 py-5" id="about-us">
    <Container className="piccocabsaboutuscontainer-Div">
      <div className="piccocabsaboutusdivtxt">
        <h1>About Us</h1>
      </div>
      <Row className="piccocabsaboutus-Row">
        <Col md="6" sm="12" xs="12">
          <img className="aboutustablet-img" src={carimg} />
        </Col>
        <Col md="6" sm="12" xs="12">
          <div className="piccocabsaboutustext-divm">
            <div className="piccocabsaboutustext-div">
              <p className="piccocabsaboutustext">
                Picco Cabs, an emerging Indian startup based in Madurai, offers
                hassle-free and top-class cab services at your doorstep with the
                lowest prices. Thrilled to be part of leading travel companies
                in South India, we prioritize convenience and excellence for our
                customers. Experience the finest cab services with us as your
                reliable travel companion.
              </p>
            </div>
            {/* <a href=""> */}
            <Button className="piccocabsaboutus-button" type="button">
              Book Cab
            </Button>
            {/* </a> */}
            {/* <a href=''><button type="button" className="btn btn-light">Book A Cab</button></a> */}
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutUs;
// import { Col ,Row} from 'react-bootstrap';
// // import classes from './index.module.scss';

// const AboutUs = () => (
//     <div className="container my-3 py-5" id="about-us">
//         <Row>
//             <Col lg={12}>
//                 <div className="center-heading">
//                     <h2 className="text-center" style={{ color: "#6bb546" }}>About us</h2>zz
//                 </div>
//                 <Row className="justify-content-center">
//                     <Col sm={10} md={10}>
//                         <div className="position-relative px-3 mt-4 text-center py-5" style={{ backgroundColor: "#6bb546", borderRadius: "10px" }}>
//                             <h5 className="my-3 text-center" style={{ color: "#FFF" }}>Picco Cabs is an emerging indian startup based on Madurai to provide Hassle free & Top class cabs services at your doorsteps in lowest prices. We are thrilled to be a part of leading travel companies in South India.</h5>
//                             {/* <Link to="/book"><button type="button" className="btn btn-light">Book A Cab</button></Link> */}
//                             <a href=''><button type="button" className="btn btn-light">Book A Cab</button></a>
//                         </div>
//                     </Col>
//                 </Row>
//             </Col>
//         </Row>
//     </div>
// );

// export default AboutUs;

// **************code
{
  /* <Row className="Row-aboutus">
      <Col lg={12} xs={12}>
        <div className="piccocabsaboutus-Div">
          <div>
            <h2 style={{ color: " rgb(107, 181, 70)" }}>About us</h2>
          </div>
        </div>
      </Col>
      <Col lg={6} xs={12}>
        <div className="aboutusimgtablet-Div">
          <img className="aboutustablet-img" src={carimg} />
        </div>
        <div className="piccocabsaboutustext-Div">
          <div className="piccocabsaboutus-div2">
            <h5 style={{ color: "black" }}>
              Picco Cabs is an emerging indian startup based on Madurai to
              provide Hassle free & Top class cabs services at your doorsteps in
              lowest prices. We are thrilled to be a part of leading travel
              companies in South India.
            </h5>
          </div>
        </div>
        <div className="piccocabsaboutus-buttondiv">
          <div className="piccocabsaboutus-buttondiv2">
            <a href="">
              <Button className="piccocabsaboutus-button" type="button">
                Book Cab
              </Button>
            </a>
          </div>
        </div>
      </Col>
      <Col lg={6}>
        <div className="aboutusimg-Div">
          <img className="aboutus-img" src={carimg} />
        </div>
        <div className="piccocabsaboutustabletbutton-Div">
          <a href="">
            <Button className="piccocabsaboutustablet-button" type="button">
              Book Cab
            </Button>
          </a>
        </div>
      </Col>
    </Row> */
}
