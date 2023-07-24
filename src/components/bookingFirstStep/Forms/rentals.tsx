import classes from '../index.module.scss';

export default function Rentals() {
  function onChangeHandler() {
    // alert(event.target.value);
  }
  return (
    <div className="mt-3">
      <form action="">
        <div className="row mx-0 gy-3">
          <div className="col-md-6 col-12">
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              FROM
            </label>
            <input
              type="text"
              className="form-control border-0 border-bottom rounded-0"
              placeholder="Start typing City"
              aria-label="First name"
            />
          </div>
          <div className="col-md-6 col-12">
            <label htmlFor="inputState" className="form-label fw-bold">
              SELECT PACKAGE
            </label>
            <select
              id="inputState"
              className="form-select"
              onChange={onChangeHandler}
            >
              <option value={"one_hour"}>One Hr(10Km)</option>
              <option value={"two_hour"}>Two Hr(20Km)</option>
              <option value={"two_hour"}>Four Hr(40Km)</option>
              <option value={"two_hour"}>Five Hr(50Km)</option>
              <option value={"two_hour"}>Six Hr(60Km)</option>
              <option value={"two_hour"}>Eight Hr(80Km)</option>
              <option value={"two_hour"}>Ten Hr(100Km)</option>
              <option value={"two_hour"}>Customize your own Package</option>
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-center position-relative">
        <button
            className={`text-uppercase btn btn-success px-5 fw-bold position-absolute ${classes["btn-explore-cabs"]} `}
          >
            Explore Cabs
          </button>
        </div>
      </form>
    </div>
  );
}
