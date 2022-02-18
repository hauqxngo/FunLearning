import React, { useState, useEffect } from "react";
import Routes from "../Routes/Routes";
import NavBar from "../Navigation/NavBar";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FunLearningApi from "../../api/api";
import jwt from "jsonwebtoken";
import UserContext from "../../UserContext";
import Loading from "../Navigation/Loading";
import useLocalStorage from "../../hooks/useLocalStorage";

// Key name for storing token in localStorage to stay logged in
export const TOKEN_STORAGE_ID = "funlearning-token";

/** FunLearning application.
 *
 * - isLoaded: manages "Loading..." part before pulling user data from API.
 *
 * - currentUser: is user logged in? This is stored
 *   in UserContext to pass around easily.
 *
 * - token: is required for authentication JWT
 *   for logged in users. This is initially read from
 *   localStorage and synced to there via the useLocalStorage hook.
 *
 * App -> Routes
 */

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [viewIds, setViewIds] = useState(new Set([]));

  // Load user info from API. Until a user is logged in and they have a token,
  // this should not run. It only needs to re-run when a user logs out, so
  // the value of the token is a dependency for this effect.

  useEffect(
    function loadUserInfo() {
      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = jwt.decode(token);
            // put the token on the FunLearningApi class
            FunLearningApi.token = token;
            let currentUser = await FunLearningApi.getCurrentUser(username);
            setCurrentUser(currentUser);
          } catch (err) {
            setCurrentUser(null);
          }
        }
        setIsLoaded(true);
      }

      // set isLoaded to false while async getCurrentUser runs; once the
      // data is fetched (or even if an error happens!), this will be set back
      // to false to control the spinner.
      setIsLoaded(false);
      getCurrentUser();
    },
    [token]
  );

  // handles logout
  const logout = () => {
    setCurrentUser(null);
    setToken(null);
  };

  // handles signup & automatically logs in after that
  async function signup(data) {
    try {
      let token = await FunLearningApi.signup(data);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  // handles log in
  async function login(data) {
    try {
      let token = await FunLearningApi.login(data);
      setToken(token);
      return { success: true };
    } catch (errors) {
      return { success: false, errors };
    }
  }

  // checks if an item has been viewed
  const hasViewed = (id) => {
    return viewIds.has(id);
  };

  // makes API call & update set of view IDs when learning an item
  const view = (id) => {
    if (hasViewed(id)) return;
    FunLearningApi.view(currentUser.username, id);
    setViewIds(new Set([...viewIds, id]));
  };

  if (!isLoaded) return <Loading />;

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{ currentUser, setCurrentUser, hasViewed, view }}
        >
          <NavBar logout={logout} />
          <Routes login={login} signup={signup} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
