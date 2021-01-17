import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import FrontPage from "./FrontPage";
import PostDetail from "./PostDetail";
import PostCreate from "./PostCreate";
import PostDelete from "./PostDelete";
import PostUpdate from "./PostUpdate";
import LogIn from "./LogIn";
import Dashboard from "./Dashboard";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicRoute from "../Utils/PublicRoute";
import { getToken, removeUserSession, setUserSession } from "../Utils/Common";
import axios from "axios";

const Routes = () => {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
    axios
      .get(`http://localhost:5000/verifyToken?token=${token}`)
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <div>Checking Authentication...</div>;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FrontPage} />
        <PrivateRoute exact path="/post/create" component={PostCreate} />
        <Route exact path="/post/:id" component={PostDetail} />
        <PrivateRoute exact path="/post/:id/delete" component={PostDelete} />
        <PrivateRoute exact path="/post/:id/update" component={PostUpdate} />
        <PublicRoute exact path="/log-in" component={LogIn} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
