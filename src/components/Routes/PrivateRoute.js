import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../../UserContext";

/** "High-Order Component" (HOC) for private routes.
 *
 * This component will check
 * if there is a valid current user and only continues to the
 * route if so. If no user is present, redirects to login form.
 */

const PrivateRoute = ({ exact, path, children }) => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
};

export default PrivateRoute;
