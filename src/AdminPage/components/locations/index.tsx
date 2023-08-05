// import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

// import { FaEdit, FaFileArchive, FaPlus } from "react-icons/fa";
// import axios from "axios";
// import "font-awesome/css/font-awesome.min.css";

// const LocationsTable = () => {
//   const [selected, setSelected] = useState({});
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function fetchData() {
//     try {
//       const response = await axios.get(
//         "http://localhost:12345/Pickuplocation/location"
//       );
//       setData(response.data);
//       console.log("Data:", response);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
//   async function deleteData(id: any) {
//     try {
//       const response = await axios.delete(
//         `http://localhost:12345/Pickuplocation/${id}`
//       );
//       setData((prevData) => prevData.filter((item: any) => item.id !== id));
//       console.log("Delete Response:", response);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   return (
//     <div className="table-responsive w-100">
//       <div className="d-flex justify-content-between">
//         <h2 className="py-3 ps-2">Locations</h2>
//         <button className="btn btn-picco align-self-center me-3 text-light">
//           <FaPlus className="text-light" />
//           Add Route
//         </button>
//       </div>
//       <table className="table table-striped align-self-start table-hover">
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">From</th>
//             <th scope="col">To</th>
//             <th scope="col">Price Rs</th>
//             <th scope="col">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item: any) => {
//             return (
//               <tr key={item.id}>
//                 <th scope="row">{item.id}</th>
//                 <td>{item.place}</td>
//                 <td>{item.location}</td>
//                 <td>{item.rate}</td>
//                 <td>
//                   <div>
//                     <button className="btn btn-info me-2">
//                       <FaEdit />
//                     </button>
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => deleteData(item.id)}
//                     >
//                       <FontAwesomeIcon icon={faTrash} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default LocationsTable;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FaEdit, FaPlus } from "react-icons/fa";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import AddLocationModal from "../modals/addNewLocation";
import "font-awesome/css/font-awesome.min.css";

const LocationsTable = () => {
  const [selected, setSelected] = useState<any>({});
  const [data, setData] = useState<any>([]);
  const [modalShow, setModalShow] = useState<any>(false);
  const [modalPurpose, setModalPurpose] = useState<any>("");
  const [selectedLocation, setSelectedLocation] = useState<any>({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        "http://localhost:12345/Pickuplocation/location"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function deleteData(id: any) {
    try {
      const response = await axios.delete(
        `http://localhost:12345/Pickuplocation/${id}`
      );
      setData((prevData: any) =>
        prevData.filter((item: any) => item.id !== id)
      );
      console.log("Delete Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleEdit = (location: any) => {
    setSelectedLocation(location.id);
    setModalPurpose("Edit");
    setModalShow(true);
    console.log(location.id);
  };

  const handleCreate = () => {
    setSelectedLocation({});
    setModalPurpose("Create");
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
    setSelectedLocation({});
  };

  const handleModalSuccess = () => {
    fetchData();
    setModalShow(false);
    setSelectedLocation({});
  };

  return (
    <div className="table-responsive w-100">
      <div className="d-flex justify-content-between">
        <h2 className="py-3 ps-2">Locations</h2>
        <button
          className="btn btn-picco align-self-center me-3 text-light"
          onClick={() => handleCreate()}
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
          {data.map((item: any) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.place}</td>
              <td>{item.location}</td>
              <td>{item.rate}</td>
              <td>
                <div>
                  <button
                    className="btn btn-info me-2"
                    onClick={() => handleEdit(item)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteData(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddLocationModal
        show={modalShow}
        hide={handleModalClose}
        purpose={modalPurpose}
        from={selectedLocation.place}
        locationId={selectedLocation}
        to={selectedLocation.location}
        price={selectedLocation.rate}
        onSuccess={handleModalSuccess}
      />
    </div>
  );
};

export default LocationsTable;
