import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./ShowSingleUser.css";

function ShowSingleUser() {
  let location = useLocation();
  let navigate = useNavigate();

  const { name, username, email, phone, imageURL, website } =
    location.state.user;
  return (
    <Card className="card-style">
      {imageURL ? (
        <Card.Img className="image" variant="top" src={imageURL} />
      ) : (
        <Card.Img
          className="image1"
          variant="top"
          src="https://www.new.libtelco.com.lr/res/images/management/no-image.jpg"
        />
      )}
      <Card.Body>
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Text className="text">
          <span>
            <i>Username:</i> {username}
          </span>
          <span>
            <i>Email:</i> {email}
          </span>
          <span>
            <i>Phone:</i> {phone}
          </span>
          <span>
            <i>Website:</i> {website}
          </span>
        </Card.Text>
        <div className="text-center">
          <Button className="w-100 mt-3" onClick={() => navigate("/")}>
            Go Back
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ShowSingleUser;
