import React from "react";
import UserContext from "./UserContext";

const testUser = {
  username: "testuser",
  first_name: "Test",
  last_name: "User",
  email: "test@test.com",
  photo_url: null,
};

const UserProvider = ({ children, currentUser = testUser }) => (
  <UserContext.Provider value={{ currentUser }}>
    {children}
  </UserContext.Provider>
);

export { UserProvider };
