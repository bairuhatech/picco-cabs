// Styles
import "./index.scss";
import { Col, Container, Row } from "react-bootstrap";
// Icons, Images
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const BookingBanner = () => {
  return (
    <Container>
      <Row className={"spaceTop3 mt-4"}>
        <Col lg={12}>
          <div className="col d-flex justify-content-center my-4 socio">
            <a
              href="https://www.facebook.com/piccocab"
              className="socialIcons d-block px-3"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://instagram.com/piccocabs"
              className="socialIcons d-block px-3"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="mailto:piccocabs@gmail.com"
              className="socialIcons d-block px-3"
              target="_blank"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zKo0rirMKzA1YLRSNagwTjIwSDY1NDVMSUpNSTZNsTKoME02SDO3TE6xTDQ3SzOxMPTiKshMTs5XSE5MKgYAg7ATpg&q=picco+cabs&rlz=1C1SQJL_enIN863IN863&oq=picco&aqs=chrome.1.69i60j46j69i57j0j46j69i60l3.2118j0j4&sourceid=chrome&ie=UTF-8"
              className="socialIcons d-block px-3"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingBanner;
