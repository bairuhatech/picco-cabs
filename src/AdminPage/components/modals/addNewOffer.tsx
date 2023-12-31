import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { Spin, message } from "antd"; // Import Spin and message components
import { Loading3QuartersOutlined } from "@ant-design/icons";
import API from "../../../config/api";
import ImagePicker from "../offerSectionManagement/components/imagePicker";

function AddNewOffersModal(props: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<any>("");
  const [loading, setLoading] = useState(false);

  const imgUpload = async (file: any) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (file) {
          const formData = new FormData();
          formData.append("file", file.file);
          const response = await fetch(
            `${API.BASE_URL}${API.CREATE_IMAGE_UPLODER}`,
            {
              method: "POST",
              body: formData,
            }
          );
          if (response.ok) {
            const jsonResponse: any = await response.json();
            const obj = {
              ...jsonResponse,
              url: jsonResponse.Location,
              status: true,
            };
            resolve(obj);
          } else {
            let obj = {
              status: false,
              url: null,
            };
            reject(obj);
          }
        } else {
          reject("no file selected");
        }
      } catch (err) {
        reject(err);
      }
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const newData = {
      title: title,
      description: description,
      price: parseInt(price),
      image: "",
    };
    const imageFile1 = image;

    if (imageFile1) {
      const compressedImage1: any = await imgUpload(imageFile1);
      newData.image = compressedImage1.url;
    }

    try {
      await axios.post(
        API.BASE_URL + API.CREATE_OFFERS,
        // "https://piccocabs-server-46642b82a774.herokuapp.com/Offers",
        newData
      );
      message.success("Offer added successfully!"); // Display success message
      setTitle("");
      setDescription("");
      setPrice("");
      setImage("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal show={props.status} onHide={props.onClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ImagePicker
              onChange={(file: any) => {
                setImage(file);
              }}
              fileURL={image?.url}
            />{" "}
            <Row className="gy-3">
              <Row className="gy-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  {/* <Form.Label>Upload Image</Form.Label>
                  <Form.Control
                    required
                    type="file"
                    placeholder=""
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  /> */}
                </Form.Group>
              </Row>{" "}
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onClose}>
              Close
            </Button>
            <Button
              type="submit"
              variant="success"
              className="btn btn-success"
              disabled={loading}
            >
              {loading ? (
                <Spin
                  indicator={
                    <Loading3QuartersOutlined
                      style={{
                        fontSize: 12,
                        color: "black",
                        marginRight: 4,
                      }}
                      spin
                    />
                  }
                />
              ) : (
                "Add"
              )}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddNewOffersModal;
