import React from "react";
import { render } from "@testing-library/react";
import Profile from "./ProfileForm";
import { UserProvider } from "../../testUtils";

it("matches snapshot", () => {
  const { asFragment } = render(
    <UserProvider>
      <Profile />
    </UserProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
