import React from "react";
import "./navbar.scss";
import PiccoImg from "../../../assets/images/logo.png";
import { CHeaderNav } from "@coreui/react";
import AppHeaderDropdown from "../../appHeaderDropdown";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons/faRightToBracket";
import { useState } from "react";
import UserLogoutModal from "../../userLogoutSection";
import UserLogoutSection from "../../userLogoutSection";
function AppHeader() {
  const nav_status = useSelector((state: any) => {
    return state.navigation;
  });
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(!showModal);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <nav className="navbar navbar-expand bg-body-tertiary pt-3 pb-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* {nav_status} */}
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="ms-auto">
              <button
                className={`btn btn-secondary circular-button ${
                  showModal ? "bg-dark-300" : ""
                }`}
                onClick={showModalHandler}
              >
                <FontAwesomeIcon icon={faRightToBracket} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <UserLogoutSection status={showModal} closeModal={closeModal} />
    </>
  );
}

export default AppHeader;
