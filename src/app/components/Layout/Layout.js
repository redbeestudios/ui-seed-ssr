import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../../routes/routes";
import "./Layout.scss";

export default () => {
  return (
    <div className="app__content">
      <div className="content">
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </div>
    </div>
  );
};
