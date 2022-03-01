import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/Context";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function AddUser() {
  const { addNewUser, handleShowAlertAddUser } = useContext(UserContext);
  let navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    imageURL: "",
    website: "",
  });

  const onInputChange = e => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const { name, username, email, phone, imageURL, website } = newUser;

  const handleSubmit = e => {
    e.preventDefault();
    addNewUser(name, username, email, phone, imageURL, website);
    handleShowAlertAddUser();
    navigate("/");
  };

  return (
    <Container>
      <h1 className="shadow-sm text-success mt-5 p-3 text-center">
        Add New User
      </h1>
      <Row>
        <Col
          lg={5}
          md={6}
          sm={12}
          className="pt-5 pb-4 m-auto shadow-lg rounded-lg"
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 fw-bold text-center">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                required
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3 fw-bold text-center">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                required
                name="username"
                value={username}
                onChange={e => onInputChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3 fw-bold text-center">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@email.com"
                required
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3 fw-bold text-center">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0123456789][0-9]{5}"
                placeholder="Enter 6-digit Number"
                maxLength="6"
                required
                name="phone"
                value={phone}
                onChange={e => onInputChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3 fw-bold text-center">
              <Form.Label>
                Profile Image <span className="fw-light">(optional)</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Add image URL"
                name="imageURL"
                value={imageURL}
                onChange={e => onInputChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3 fw-bold text-center">
              <Form.Label>
                Website <span className="fw-light">(optional)</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="website"
                value={website}
                onChange={e => onInputChange(e)}
              />
            </Form.Group>

            <Button
              variant="success"
              type="submit"
              className="mt-4 mb-3 w-100 fs-5"
            >
              Add User
            </Button>
            <div className="col text-center">
              <Link to="/">
                <Button variant="danger" type="submit">
                  Cancel
                </Button>
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddUser;
