import React from "react";

import NavBar from "../components/NavBar";
import { useUserContext } from "../context/userContext";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <h1>Dashboard </h1>
        <h2>Name : {user.displayName}</h2>
        <h2>Email : {user.email}</h2>
        <button onClick={logoutUser}>Log out</button>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
