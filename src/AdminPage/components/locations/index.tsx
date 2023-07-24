import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

import { FaEdit, FaFileArchive, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { locationModalActions } from "../../../store/locationModal";
import { useSelector } from "react-redux";
import DeleteLocationModal from "../modals/deleteLocation";
import { useState } from "react";

const locationsTableData = [
  {
    id: 1,
    from: "Mookambika",
    to: "Palakkad",
    price: 1500,
  },
  {
    id: 2,
    from: "Kannur",
    to: "Kozhikode",
    price: 700,
  },
  {
    id: 3,
    from: "Ernakulam",
    to: "Kazarkode",
    price: 5400,
  },
  {
    id: 4,
    from: "Mananthavady",
    to: "Palakkad",
    price: 3300,
  },
];

const LocationsTable = () => {
  const [selected, setSelected] = useState({});

  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(locationModalActions.toggleModal());
  };
  const editLocation = (data: any, event: any) => {
    dispatch(locationModalActions.editLocations(data));
  };
  const [delte, setDelete] = useState(false);
  const deleteLocation = (data: any, event: any) => {
    setDelete(true);
    setSelected(data);
  };
  const closeDeleteModal = () => {
    setDelete(false);
  };

  return (
    <div className="table-responsive w-100">
      <div className="d-flex justify-content-between">
        <h2 className="py-3 ps-2">Locations</h2>
        <button
          className="btn btn-picco align-self-center me-3 text-light"
          onClick={toggleModal}
        >
          <FaPlus className="text-light" />
          Add Route
        </button>
      </div>
      <table className="table table-striped align-self-start table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Price Rs</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {locationsTableData.map((item: any) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.from}</td>
                <td>{item.to}</td>
                <td>{item.price}</td>
                <td>
                  <div>
                    <button
                      className="btn btn-info me-2"
                      onClick={editLocation.bind(null, item)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={deleteLocation.bind(null, item)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <DeleteLocationModal
        status={delte}
        onModalClose={closeDeleteModal}
        selectedItem={selected}
      />
    </div>
  );
};
export default LocationsTable;
