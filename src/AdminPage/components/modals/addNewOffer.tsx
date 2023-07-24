import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";

function AddNewOffersModal(props: any) {
  const formSubmitHandler = (event: any) => {
    event.preventDefault();
  };
  return (
    <>
      <Modal show={props.status} onHide={props.onClose}>
        <Form onSubmit={formSubmitHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="gy-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Title</Form.Label>
                <Form.Control required type="text" placeholder="Title" />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Description</Form.Label>
                <Form.Control required type="text" placeholder="Description" />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Price</Form.Label>
                <Form.Control required type="number" placeholder="Price" />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control required type="file" placeholder="" />
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>Action</Form.Label>
                <Form.Control required type="text" placeholder="Action" />
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onClose}>
              Close
            </Button>
            <Button type="submit" className="btn btn-success">Add</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddNewOffersModal;
