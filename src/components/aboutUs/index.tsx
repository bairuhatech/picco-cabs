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
            <a href="" style={{ width: "50%" }}>
              <Button className="piccocabsaboutus-button" type="button">
                Book Cab
              </Button>
            </a>
            {/* <a href=''><button type="button" className="btn btn-light">Book A Cab</button></a> */}
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutUs;
