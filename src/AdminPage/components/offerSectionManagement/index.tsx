import AddNewOffersModal from "../modals/addNewOffer";
import {useState} from "react";

const OfferSectionManagement = () => {
  const [toggleModal,setToggleModal]=useState(false);
  const modalToggler=()=>{
    setToggleModal(!toggleModal);
  }
  const closeModal=()=>{
    setToggleModal(false);
  }
  return (
    <>
      <div className="table-responsive w-100">
        <h2 className="py-3 ps-2">OfferSection Management</h2>
        <button className="btn-secondary btn ms-2 fw-bold" onClick={modalToggler}>Add New</button>
        <table className="table table-striped align-self-start table-hover mt-2 ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Greate offers</td>
              <td>Limited time offer</td>
              <td>$200</td>
              <td>Image</td>
              <td>your actions</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Greate offers</td>
              <td>Limited time offer</td>
              <td>$200</td>
              <td>Image</td>
              <td>your actions</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Greate offers</td>
              <td>Limited time offer</td>
              <td>$200</td>
              <td>Image</td>
              <td>your actions</td>
            </tr>
          </tbody>
        </table>
      </div>
      <AddNewOffersModal status={toggleModal} onClose={closeModal}/>
    </>
  );
};
export default OfferSectionManagement;
