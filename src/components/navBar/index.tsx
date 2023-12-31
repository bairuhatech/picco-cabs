import React, { useState } from "react";
import "./index.scss";
import PiccoLogo from "../../assets/images/logo.png";
import CustomModal from "../loginForm";

const NavigationBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    // <nav className="navbar navbar-expand-md bg-body-tertiary sticky-top bg-light  shadow border-bottom-rounded py-0"  >
    // <nav className="navbar navbar-expand-md bg-body-tertiary sticky-top bg-light shadow-sm border-bottom-rounded py-0">
    <nav className="navbar navbar-expand-md bg-body-tertiary sticky-top bg-light shadow-sm py-0">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={PiccoLogo} className="picco-logo ps-3"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end bg-light"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              PiccoCabs
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body px-0">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item border-bottom-md-none py-2">
                <a className="nav-link px-3 fw-bold" href="/#about-us">
                  {/* About Us */}
                </a>
              </li>
              <li className="nav-item border-bottom-md-none py-2">
                <a className="nav-link px-3 fw-bold" href="./booking">
                  Book
                </a>
              </li>
              <li className="nav-item border-bottom-md-none py-2">
                <a className="nav-link px-3 fw-bold" href="/#offer-section">
                  Offers
                </a>
              </li>
              <li className="nav-item border-bottom-md-none py-2">
                <a className="nav-link px-3 fw-bold" href="/#contact-us">
                  Contact
                </a>
              </li>
              <li className="nav-item border-bottom-md-none py-2">
                <a
                  className="nav-link px-3 fw-bold"
                  href="/#"
                  onClick={() => setIsModalOpen(true)}
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <CustomModal
          isModalOpen={isModalOpen}
          // handleOk={handleOk}
          handleCancel={handleCancel}
        />
      )}
      <div className="mobile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
        </svg>{" "}
        +91 915 915 7070
      </div>
    </nav>
  );
};

export default NavigationBar;
