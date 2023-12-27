import { useState, useEffect } from "react";
import { useRef } from "react";

// Styles
import { Col, Row } from "react-bootstrap";
import "./index.scss";

// Icons Images
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTaxi,
  faRoad,
  faUser,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const OurExpertise = (props: any) => {
  const [ridersCount, setRidersCount] = useState(0);
  const [routesCount, setRoutesCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [vehicleCount, setVehicleCount] = useState(0);
  const section=useRef(null);

//    var div_offset = document.getElementById('counter-stats').offsetTop - window.innerHeight;
  function onScroll() {
    const countdownEl = document.getElementById("counter-stats");
    let div_offset=0;
    if(countdownEl){
        console.log(countdownEl.offsetTop - window.innerHeight);
        div_offset=countdownEl.offsetTop - window.innerHeight;
    }
    let currentOffset = window.pageYOffset;
    if (currentOffset>div_offset) {
      for (let i = 0; i <= 1000; i++) {
        setTimeout(() => {
          setRidersCount((846 / 1000) * i);
          setRoutesCount((119 / 1000) * i);
          setCustomerCount((400 / 1000) * i);
          setVehicleCount((62 / 1000) * i);
        }, 1000);
      }
      window.removeEventListener("scroll", onScroll);
    }
  }
  useEffect(() => {
    if (typeof window != "undefined") {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <section id="counter-stats" ref={section}>
      <div className="container mb-3">
        <Row>
          <Col lg={12} md={12} className="py-3">
            <div className="center-heading">
              <h2 className="text-center" style={{ color: "#6BB546" }}>
                Our Expertise
              </h2>
              <h3 className="my-3">Our record and achievements since 2015</h3>
            </div>
          </Col>
        </Row>
        <div className="counterSection">
          <Col className="counterItem">
            <FontAwesomeIcon icon={faTaxi} className="icon" />
            <div className="countNo" data-count="846">
              {Math.round(ridersCount)}
            </div>
            <h5 className="countText">Rides and More</h5>
          </Col>
          <Col className="counterItem">
            <FontAwesomeIcon icon={faRoad} className="icon" />
            <div className="countNo" data-count="119">
              {Math.round(routesCount)}
            </div>
            <h5 className="countText">Routes</h5>
          </Col>
          <Col className="counterItem">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="countNo" data-count="400">
                {Math.round(customerCount)}
              </div>
              <span>+</span>
            </div>
            <h5 className="countText">Happy customers</h5>
          </Col>
          <Col className="counterItem">
            <FontAwesomeIcon icon={faShieldAlt} className="icon" />
            <div className="countNo" data-count="62">
              {Math.round(vehicleCount)}
            </div>
            <h5 className="countText">Trusted Vehicles</h5>
          </Col>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
