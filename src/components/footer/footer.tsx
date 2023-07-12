import { Col, Row, Container } from "react-bootstrap";

const Footer = () => (
  <footer className="bg-light text-center text-md-left md-0 mt-5" id="footer">
    <Container className="text-center">
      <Row className="justify-content-center py-4 ">
        <h4 id="contact">All Over South India</h4>
      </Row>
      <Row className="justify-content-center mx-2 py-3 text-start">
        <Col md={4} lg={4} sm={12} xs={12} className="mx-auto pb-4 ">
          <h4 className="my-4 ">Our best routes</h4>
          <Row>
            <Col lg={6} md={6}>
              <ul className="list-unstyled ">
                <li className={"pr-2"}>Madurai</li>
                <li className={"pr-2"}>Chennai</li>
                <li className={"pr-2"}>Ramanathapuram</li>
                <li className={"pr-2"}>Tirunelveli</li>
                <li className={"pr-2"}>Coimbatore</li>
                <li className={"pr-2"}>Kodaikanal</li>
                <li className={"pr-2"}>Kanyakumari</li>
                <li className={"pr-2"}>Karur</li>
                <li className={"pr-2"}>Trichy</li>
                <li className={"pr-2"}>Thanjavur</li>
                <li className={"pr-2"}>Erode</li>
              </ul>
            </Col>
            <Col lg={6} md={6}>
              <ul className="list-unstyled ">
                <li className={"pl-2"}>Mysore</li>
                <li className={"pl-2"}>Tirupathi</li>
                <li className={"pl-2"}>Kerala</li>
                <li className={"pl-2"}>Visakhapatnam</li>
                <li className={"pl-2"}>Karnataka</li>
                <li className={"pl-2"}>Bangalore</li>
                <li className={"pl-2"}>Hyderabad</li>
                <li className={"pl-2"}>Goa</li>
                <li className={"pl-2"}>Andhra Pradesh</li>
                <li className={"pl-2"}>Pondicherry</li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col lg={3} md={3} sm={12} xs={12} className="mx-auto pb-4">
          <h4 className="my-4 ">Our Services</h4>
          <ul className="list-unstyled ">
            <li>Local Booking</li>
            <li>Rental Cabs</li>
            <li>Outstation Rides</li>
            <li>Offers</li>
            <li>Hill stations</li>
          </ul>
        </Col>
        <Col lg={2} md={2} xs={6} className="col-md-2 col-xs-6 mx-auto pb-4 ">
          <h4 className="my-4 "> Address </h4>
          <h4 className="address "></h4>No.187
          <br />
          Palace Road
          <br />
          Madurai-625001
          <br />
          Tamilnadu
          <br />
          India
        </Col>
        <Col lg={3} md={3} xs={6} className="col-md-3 col-xs-6 mx-auto pb-4 ">
          <h4 className="my-4 ">Contact</h4>
          <ul className="list-unstyled ">
            <li>+91 915 915 7070</li>
            <li>piccocabs@gmail.com</li>
          </ul>
        </Col>
      </Row>
      {/* <Row className="justify-content-center ">
                <Col lg={12} md={12} xs={12} className="mx-2 ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3930.2054855433!2d78.12485339814957!3d9.916837259505712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5c0f79cd9a76f481!2sPicco%20cabs!5e0!3m2!1sen!2sin!4v1601530520424!5m2!1sen!2sin
                            " id="map " frameBorder="0 " width="100%" style={{border: "0", height: "250px"}}  aria-hidden="false " className="img-fluid " />
                </Col>
            </Row> */}
      <p className="text-center text-secondary border-top border-secondary py-4 ">
        Picco Cabs © 2020 || Powered By NoNo Design
        <br />
        <a href="/pages/t&c.html " style={{ color: "#000" }}>
          Terms & Conditions Applied
        </a>
      </p>
    </Container>
  </footer>
);

export default Footer;
