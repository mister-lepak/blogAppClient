import React from "react";
import { getUser } from "../Utils/Common";
import App from "./App";
import HeaderTitle from "./HeaderTitle";

const Dashboard = (props) => {
  const user = getUser();

  return (
    <div>
      <HeaderTitle adminMode={true} {...props} username={user.username} />
      <App user={user.username} />
    </div>
  );
};

export default Dashboard;
