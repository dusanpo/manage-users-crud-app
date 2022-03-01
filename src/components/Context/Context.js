import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const UserContext = createContext();

function Context(props) {
  const [users, setUsers] = useState([]);

  const [showAlertAddUser, setShowAlertAddUser] = useState(false);

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users")));
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  });

  const addNewUser = (name, username, email, phone, imageURL, website) => {
    setUsers([
      { id: uuidv4(), name, username, email, phone, imageURL, website },
      ...users,
    ]);
  };

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, userUpdated) => {
    setUsers(users.map(user => (user.id === id ? userUpdated : user)));
  };

  const handleShowAlertAddUser = () => {
    setShowAlertAddUser(true);
    setTimeout(() => {
      setShowAlertAddUser(false);
    }, 1500);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        addNewUser,
        deleteUser,
        updateUser,
        showAlertAddUser,
        handleShowAlertAddUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default Context;
