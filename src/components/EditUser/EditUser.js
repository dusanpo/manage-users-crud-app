import React, { useState, useContext } from "react";
import { UserContext } from "../Context/Context";
import { Form, Button } from "react-bootstrap";

function EditUser({ user, handleShowAlertEditUser }) {
  const id = user.id;
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [imageURL] = useState(user.imageURL);
  const [website] = useState(user.website);

  const { updateUser } = useContext(UserContext);

  const userUpdated = { id, name, username, email, phone, imageURL, website };

  const handleSubmit = e => {
    e.preventDefault();
    updateUser(id, userUpdated);
    handleShowAlertEditUser();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mt-2 fw-bold">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          required
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mt-3 fw-bold">
        <Form.Label>Username</Form.Label>
        <Form.Control
          placeholder="Enter username"
          required
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mt-3 fw-bold">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mt-3 fw-bold">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="tel"
          pattern="[0123456789][0-9]{5}"
          placeholder="Enter phone 6 digits"
          required
          maxLength="6"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </Form.Group>

      <Button className="mt-4 w-100" type="submit" variant="success">
        Edit User
      </Button>
    </Form>
  );
}

export default EditUser;
