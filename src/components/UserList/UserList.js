import React, { useContext, useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { UserContext } from "../Context/Context";
import { Link } from "react-router-dom";
import User from "../User/User";
import Pagination from "../Pagination/Pagination";
import "./UserList.css";

function UserList() {
  const { users, showAlertAddUser } = useContext(UserContext);

  const [showAlertDeleteUser, setShowAlertDeleteUser] = useState(false);
  const [showAlertEditUser, setShowAlertEditUser] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);


  const handleShowAlertDeleteUser = () => {
    setShowAlertDeleteUser(true);
    setTimeout(() => {
      setShowAlertDeleteUser(false);
    }, 1500);
  };

  const handleShowAlertEditUser = () => {
    setShowAlertEditUser(true);
    setTimeout(() => {
      setShowAlertEditUser(false);
    }, 1500);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(
    indexOfFirstUser,
    indexOfLastUser
  );
  const totalPagesNum = Math.ceil(users.length / usersPerPage);

  return (
    <div className="wrapper">
      <div className="table-title">
        <div className="row">
          <div className="col col-sm-6">
            <h2>
              Manage <b>Users</b>
            </h2>
          </div>
          <div className="col col-sm-6">
            <Link to="/addUser">
              <Button className="btn btn-success mt-1">
                <i className="material-icons">person_add</i>
                <span>ADD NEW</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Alert className="text-center" show={showAlertAddUser} variant="success">
        New User Added!
      </Alert>

      <Alert
        className="text-center"
        show={showAlertDeleteUser}
        variant="danger"
      >
        User Deleted!
      </Alert>

      <Alert className="text-center" show={showAlertEditUser} variant="warning">
        User Edited!
      </Alert>

      {users.length > 0 ? (
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map(user => (
              <tr key={user.id}>
                <User
                  user={user}
                  handleShowAlertDeleteUser={handleShowAlertDeleteUser}
                  handleShowAlertEditUser={handleShowAlertEditUser}
                />
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="centered pt-2">
          <h3>No Users Found</h3>
          <i
            className="material-icons px-2 text-warning"
            style={{ fontSize: "29px" }}
          >
            sentiment_neutral
          </i>
        </div>
      )}
      {users.length > 3 &&(
      <Pagination
      totalPagesNum = {totalPagesNum}
      setCurrentPage = {setCurrentPage}
      users = {users}
      currentUsers = {currentUsers}
      />
      )}
    </div>
  );
}

export default UserList;
