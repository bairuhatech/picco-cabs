import { Col ,Row} from 'react-bootstrap';
// import classes from './index.module.scss';

const AboutUs = () => (
    <div className="container my-3 py-5" id="about-us">
        <Row>
            <Col lg={12}>
                <div className="center-heading">
                    <h2 className="text-center" style={{ color: "#6bb546" }}>About us</h2>
                </div>
                <Row className="justify-content-center">
                    <Col sm={10} md={10}>
                        <div className="position-relative px-3 mt-4 text-center py-5" style={{ backgroundColor: "#6bb546", borderRadius: "10px" }}>
                            <h5 className="my-3 text-center" style={{ color: "#FFF" }}>Picco Cabs is an emerging indian startup based on Madurai to provide Hassle free & Top class cabs services at your doorsteps in lowest prices. We are thrilled to be a part of leading travel companies in South India.</h5>
                            {/* <Link to="/book"><button type="button" className="btn btn-light">Book A Cab</button></Link> */}
                            <a href=''><button type="button" className="btn btn-light">Book A Cab</button></a>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
);

export default AboutUs;