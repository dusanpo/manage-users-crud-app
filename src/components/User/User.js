import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { Tooltip, OverlayTrigger, Modal, Button } from "react-bootstrap";
import "./User.css";
import EditUser from "../EditUser/EditUser";

function User({ user, handleShowAlertDeleteUser, handleShowAlertEditUser }) {
  const { deleteUser } = useContext(UserContext);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [user]);

  return (
    <>
      <td className="pt-4">{user.name}</td>
      <td className="pt-4">{user.username}</td>
      <td className="pt-4">{user.email}</td>
      <td className="pt-4">{user.phone}</td>
      <td>
        <Link to={`/profile/${user.id}`} state={{ user }}>
          <OverlayTrigger
            placement="left"
            overlay={<Tooltip className="vw-200">view more</Tooltip>}
          >
            <button className="btn text-primary btn-act">
              <i className="material-icons">visibility</i>
            </button>
          </OverlayTrigger>
        </Link>
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip className="vw-200">edit</Tooltip>}
        >
          <button onClick={handleShow} className="btn text-warning btn-act ">
            <i className="material-icons" style={{ fontSize: "27px" }}>
              manage_accounts
            </i>
          </button>
        </OverlayTrigger>
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip className="vw-200">delete</Tooltip>}
        >
          <button
            onClick={() => {
              deleteUser(user.id);
              handleShowAlertDeleteUser();
            }}
            className="btn text-danger btn-act"
          >
            <i className="material-icons">delete</i>
          </button>
        </OverlayTrigger>
      </td>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change User Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUser
            user={user}
            handleShowAlertEditUser={handleShowAlertEditUser}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default User;
