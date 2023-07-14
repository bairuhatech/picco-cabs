import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import ManImg from "../../assets/images/man.svg";
import WomenImg from '../../assets/images/designer.svg';

const TestimonalSection = () => (
  <div className="container my-3" id="testimonial">
    <section>
      <div className="text-center my-3">
        <h2 className="font-weight-bold display-4 ">
          What Our <span style={{ color: "#6bb546" }}>Clients</span> Say?
        </h2>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="bg-light position-relative px-3 mt-5 text-center py-5">
            <div
              className="my-2"
              style={{ fontSize: "30px", color: "#6bb546" }}
            >
              <FontAwesomeIcon icon={faQuoteRight} />
            </div>
            <div className="px-3 text-center pb-3">
              <p className="font-weight-light my-3 text-secondary">
                Good approach... Nice Customer interaction... Worth to call
                again, I am really happy to had the best cab.
              </p>
            </div>
          </div>
          <div>
            <div
              className="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white mt-4"
              style={{
                backgroundColor: "#6bb546",
                width: "60px",
                height: "60px",
              }}
            >
              <img
                className="rounded-circle"
                src={ManImg}
                alt="Man"
                height="55px"
                width="55px"
              />
            </div>
            <div className="text-center">
              <small className="font-weight-bold" style={{ lineHeight: "1" }}>
                Vijay
              </small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            style={{ backgroundColor: "#6bb546" }}
            className="position-relative px-3 mt-5 text-center py-5"
          >
            <div className="my-2 text-white" style={{ fontSize: "30px" }}>
              <FontAwesomeIcon icon={faQuoteRight} />
            </div>
            <div className="px-3 text-center pb-3">
              <p className="font-weight-light my-3 text-white">
                The vehicle is in good condition. The driver is very
                professional and friendly as well as drives safely.
              </p>
            </div>
          </div>
          <div>
            <div
              className="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white mt-4"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#6bb546",
              }}
            >
              <img
                className="rounded-circle"
                src={WomenImg}
                alt="Women"
                height="55px"
                width="55px"
              />
            </div>
            <div className="text-center">
              <small className="font-weight-bold" style={{ lineHeight: "1" }}>
                Anjana
              </small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-light position-relative px-3 mt-5 text-center py-5">
            <div
              className="my-2"
              style={{ fontSize: "30px", color: "#6bb546" }}
            >
              <FontAwesomeIcon icon={faQuoteRight} />
            </div>
            <div className="px-3 text-center pb-3">
              <p className="font-weight-light my-3 text-secondary">
                Well behaved. Good driving, Friendly. This is my first ride with
                piccocabs and is better than expected.
              </p>
            </div>
          </div>
          <div>
            <div
              className="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white mt-4"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#6bb546",
              }}
            >
              <img
                className="rounded-circle"
                src={ManImg}
                alt="Customer"
                height="55px"
                width="55px"
              />
            </div>
            <div className="text-center">
              <small className="font-weight-bold" style={{ lineHeight: "1" }}>
                Pradeep
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default TestimonalSection;
