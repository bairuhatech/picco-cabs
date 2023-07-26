import { Navigate } from "react-router";
import classes from "../index.module.scss";
import { useNavigate } from "react-router-dom";

export default function RoundTrip() {
  const navigate = useNavigate();
  const currTime = new Date();
  currTime.setDate(currTime.getDate());
  var date = currTime.toISOString().substring(0, 10);
  const time = currTime
    .getHours()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  const minute = currTime
    .getMinutes()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  return (
    <div className="mt-3">
      <form action="">
        <div className="row mx-0 gy-3">
          <div className="col-md-3 col-sm-6 col-12">
            <label htmlFor="user_from" className="form-label fw-bold">
              FROM
            </label>
            <input
              type="text"
              className="form-control border-0 border-bottom rounded-0"
              placeholder="Start typing City"
              aria-label="user_from"
            />
            z
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <label htmlFor="user_to" className="form-label fw-bold">
              TO
            </label>
            <input
              type="text"
              className="form-control border-0  border-bottom rounded-0"
              placeholder="Start typing City"
              aria-label="user_to"
            />
          </div>
          <div className="col-md-2 col-4">
            <label htmlFor="pickup_date" className="form-label fw-bold">
              PICK UP
            </label>
            <input
              type="date"
              className="form-control border-0  border-bottom rounded-0"
              placeholder="Pick up date"
              aria-label="pickup_date"
              defaultValue={date}
            />
          </div>
          <div className="col-md-2 col-4">
            <label htmlFor="return_date" className="form-label fw-bold">
              RETURN
            </label>
            <input
              type="date"
              className="form-control border-0  border-bottom rounded-0"
              placeholder="return_date"
              aria-label="Last name"
              defaultValue={date}
            />
          </div>
          <div className="col-md-2 col-4">
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              PICK UP AT
            </label>
            <input
              type="time"
              className="form-control border-0  border-bottom rounded-0"
              defaultValue={`${time}:${minute}`}
              placeholder="Pick up time"
              aria-label="Last name"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center position-relative">
          <a href="../../bookingSecondStep/index">
            <button
              className={`text-uppercase btn btn-success px-5 fw-bold position-absolute ${classes["btn-explore-cabs"]} `}
              // onClick={() => navigate("/bookingSecondStep")}
            >
              Explore Cabs
            </button>
          </a>
        </div>
      </form>
    </div>
  );
}
