import classes from "./index.module.scss";
import UserLogo from "../../../assets/images/man.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginActions } from "../../../store/loginSlice";
import { useSelector } from "react-redux";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons/faRightToBracket";
import { Modal, Button } from "react-bootstrap";
const UserLogoutSection = (props: any) => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(LoginActions.userLogout());

    navigate("/adminpanel/login");
  };
  const userName = useSelector((state: any) => {
    return state.login.user.user_name;
  });
  const dispatch = useDispatch();
  return (
    <Modal
      show={props.status}
      onHide={props.closeModal}
      className={`section-container bg-white rounded shadow pb-4 pt-3 ${classes["modal"]} ${classes["modal-backdrop"]}   
}`}
    >
      <div>
        <div className="d-flex">
          <button
            className="ms-auto me-2 border-0 bg-transparent"
            onClick={props.closeModal}
          >
            <FontAwesomeIcon
              color="grey"
              className="hover-color"
              size="lg"
              icon={faXmark}
            />
          </button>
        </div>
        <div className="border-bottom">
          <div className="d-flex justify-content-center ">
            <div className={`${classes["user-logo-container"]} border`}>
              {" "}
              <img src={UserLogo} alt="" />
            </div>
          </div>
          <h6 className="text-center mt-2 text-capitalize">
            {userName ? userName : "userName"}
          </h6>
        </div>
        <h6 className="text-center mt-3">someuser@gmail.com</h6>
        <div className="d-flex justify-content-end align-items-center">
          <h6 className="pe-3">Signout</h6>
          <button className="btn btn-warning me-3" onClick={logoutHandler}>
            {" "}
            <FontAwesomeIcon icon={faRightToBracket} />
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default UserLogoutSection;
