import { useState } from "react";
import ManImg from "../../assets/images/man.svg";

// Styles
import "./index.scss";
// import cx from 'classnames';
// import useStyles from 'isomorphic-style-loader/useStyles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const FloateringButton = () => {
  return (
    <div>
      <div className="flootCircle">
        <a href="https://wa.me/919159157070" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </div>
  );
};

export default FloateringButton;
