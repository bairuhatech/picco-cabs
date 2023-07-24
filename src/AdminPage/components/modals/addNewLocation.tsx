import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { locationModalActions } from "../../../store/locationModal";
import Form from "react-bootstrap/Form";
import "./index.scss";

function AddLocationModal(props: any) {
  const [dataValid, setDataValid] = useState('null');
  const toggleModal = useSelector((state: any) => {
    return state.locationModal.toggle;
  });
  const editModal = useSelector((state: any) => {
    return state.locationModal.edit;
  });
  const table_data = useSelector((state: any) => {
    return state.locationModal.data;
  });
  const dispatch = useDispatch();
  const toggleLocationModal = () => {
    dispatch(locationModalActions.toggleModal());
    setFormData({from:'',to:'',price:null});
  };
  const [formData, setFormData] = useState({ from: "", to: "", price: null });
  const fromChangeHanlder = (event: any) => {
    setFormData({ ...formData, from: event.target.value });
  };
  const toChangleHandler = (event: any) => {
    setFormData({ ...formData, to: event.target.value });
  };
  const priceChangeHandler = (event: any) => {
    setFormData({ ...formData, price: event.target.value });
  };
  

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    if ((!formData.from || !formData.to || !formData.price) && !editModal) {
      setDataValid('false');
    } else {
      setDataValid('true');
      //handle the form submitting action.
    }
  };
  return (
    <>
      <Modal show={toggleModal} onHide={toggleLocationModal} centered>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>
              {editModal ? "Edit Location" : "Add Location"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formGroupFrom">
              <Form.Label className="fw-bold">From</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter From"
                className="bg-light-300"
                defaultValue={table_data ? table_data.from : formData.from}
                onChange={fromChangeHanlder}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupTo">
              <Form.Label className="fw-bold">To</Form.Label>
              <Form.Control
                type="text"
                placeholder="To"
                className="bg-light-300"
                defaultValue={table_data ? table_data.to : formData.to}
                onChange={toChangleHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPrice">
              <Form.Label className="fw-bold">Price(in Rs)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                className="bg-light-300"
                defaultValue={table_data ? table_data.price : formData.price}
                onChange={priceChangeHandler}
              />
            </Form.Group>
            {dataValid==='false'&&!editModal&&<p className="text-danger">please enter all values</p>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleLocationModal}>
              Close
            </Button>
            <Button variant="success" type="submit" onClick={formSubmitHandler}>
             {!editModal?'Create':'Update'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddLocationModal;
