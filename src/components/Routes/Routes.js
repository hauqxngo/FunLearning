import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Pages/Home";
import CategoryList from "../Categories/CategoryList";
import CategoryDetail from "../Categories/CategoryDetail";
import LoginForm from "../Forms/LoginForm";
import SignupForm from "../Forms/SignupForm";
import ProfileForm from "../Forms/ProfileForm";
import PrivateRoute from "./PrivateRoute";
import ProtectingRoute from "./ProtectingRoute";

/** Routes are wrapped by <Private> would only visible when logged in
 *
 * Invalid links will be redirected to Home page.
 */

const Routes = ({ login, signup }) => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home login={login} />
        </Route>
        <ProtectingRoute exact path="/login">
          <LoginForm login={login} />
        </ProtectingRoute>
        <ProtectingRoute exact path="/signup">
          <SignupForm signup={signup} />
        </ProtectingRoute>

        <PrivateRoute exact path="/categories">
          <CategoryList />
        </PrivateRoute>
        <PrivateRoute exact path="/categories/:handle">
          <CategoryDetail />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <ProfileForm />
        </PrivateRoute>

        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Routes;
