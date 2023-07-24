import { Col, Row, Container } from "react-bootstrap";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FaLocationDot } from "react-icons/fa6";
// import Button from "react-bootstrap";

const HomeFooter = () => {
  // useStyles(s);
  return (
    <div>
      <Container className="toRouteContainer">
        <Row className="headingRow bg-primary ">
          <Col
            lg={12}
            sm={12}
            className="headeing text-light text-center py-2 "
          >
            OUR TOP CAB ROUTES
          </Col>
        </Row>
        <Row className="justify-content-center contentRow">
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row className="innerDiv">
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Chennai&to=Madurai`}>
                  {" "}
                  Chennai to Madurai cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Chennai&to=Bangalore`}>
                  {" "}
                  Chennai to Bangalore cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Chennai&to=Pondicherry`}>
                  {" "}
                  Chennai to Pondicherry cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Chennai&to=Coimbatore`}>
                  {" "}
                  Chennai to Coimbatore cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Chennai&to=Tirunelveli`}>
                  {" "}
                  Chennai to Tirunelveli cab{" "}
                </a>
              </Col>

              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Madurai&to=Chennai`}>
                  {" "}
                  Madurai to Chennai cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Madurai&to=Bangalore`}>
                  {" "}
                  Madurai to Bangalore cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Madurai&to=Pondicherry`}>
                  {" "}
                  Madurai to Pondicherry cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Madurai&to=Coimbatore`}>
                  {" "}
                  Madurai to Coimbatore cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Madurai&to=Tirunelveli`}>
                  {" "}
                  Madurai to Tirunelveli cab{" "}
                </a>
              </Col>

              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Bangalore&to=Chennai`}>
                  {" "}
                  Bangalore to Chennai cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Bangalore&to=Madurai`}>
                  {" "}
                  Bangalore to Madurai cab{" "}
                </a>
                {/* <button>view more</button> */}
              </Col>

              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Bangalore&to=Pondicherry`}>
                  {" "}
                  Bangalore to Pondicherry cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Bangalore&to=Coimbatore`}>
                  {" "}
                  Bangalore to Coimbatore cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Bangalore&to=Tirunelveli`}>
                  {" "}
                  Bangalore to Tirunelveli cab{" "}
                </a>
              </Col>

              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Pondicherry&to=Chennai`}>
                  {" "}
                  Pondicherry to Chennai cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Pondicherry&to=Bangalore`}>
                  {" "}
                  Pondicherry to Bangalore cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Pondicherry&to=Madurai`}>
                  {" "}
                  Pondicherry to Madurai cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Pondicherry&to=Coimbatore`}>
                  {" "}
                  Pondicherry to Coimbatore cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Pondicherry&to=Tirunelveli`}>
                  {" "}
                  Pondicherry to Tirunelveli cab{" "}
                </a>
              </Col>

              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Coimbatore&to=Chennai`}>
                  {" "}
                  Coimbatore to Chennai cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Coimbatore&to=Bangalore`}>
                  {" "}
                  Coimbatore to Bangalore cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Coimbatore&to=Pondicherry`}>
                  {" "}
                  Coimbatore to Pondicherry cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Coimbatore&to=Madurai`}>
                  {" "}
                  Coimbatore to Madurai cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Coimbatore&to=Tirunelveli`}>
                  {" "}
                  Coimbatore to Tirunelveli cab{" "}
                </a>
              </Col>

              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Tirunelveli&to=Chennai`}>
                  {" "}
                  Tirunelveli to Chennai cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Tirunelveli&to=Bangalore`}>
                  {" "}
                  Tirunelveli to Bangalore cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Tirunelveli&to=Pondicherry`}>
                  {" "}
                  Tirunelveli to Pondicherry cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Tirunelveli&to=Coimbatore`}>
                  {" "}
                  Tirunelveli to Coimbatore cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Tirunelveli&to=Madurai`}>
                  {" "}
                  Tirunelveli to Madurai cab{" "}
                </a>
              </Col>

              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Madurai&to=kodai`}>
                  {" "}
                  Madurai to kodai cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Chennai&to=kodai`}>
                  {" "}
                  Chennai to kodai cab{" "}
                </a>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12} className="routeDiv">
                <span>
                  {" "}
                  <FaLocationDot style={{ color: "#6bb644" }} />
                </span>
                <a href={`/book?from=Madurai&to=tenkasi`}>
                  {" "}
                  Madurai to tenkasi cab{" "}
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeFooter;
