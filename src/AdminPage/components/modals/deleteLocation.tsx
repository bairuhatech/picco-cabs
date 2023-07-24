import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const DeleteLocationModal = (props: any) => {

  return (
    <>

      <Modal
        show={props.status}
        onHide={props.onModalClose}
        backdrop="static"
        keyboard={false} centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p className="fw-bold"><span className='text-secondary'> From: </span>{props.selectedItem?props.selectedItem.from:''}</p>
         <p className="fw-bold"><span className='text-secondary'> To: </span>{props.selectedItem?props.selectedItem.to:''}</p>
         <p className="fw-bold"><span className='text-secondary'> Price: </span>{props.selectedItem?props.selectedItem.price:''}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onModalClose}>
            Close
          </Button>
          <Button variant="danger">Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteLocationModal;
