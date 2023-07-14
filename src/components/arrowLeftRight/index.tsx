import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className="arrow arrowRight">
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
}

export function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className="arrow arrowLeft">
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
}
