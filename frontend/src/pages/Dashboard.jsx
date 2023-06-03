import React, { useContext } from "react";
// Context
import AuthContext from "../contexts/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <p>
        User detail : <span>{user.profile.username}</span>
      </p>
    </div>
  );
};

export default Dashboard;
