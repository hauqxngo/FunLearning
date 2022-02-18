import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Home from "./Home";
import { UserProvider } from "../../testUtils";

it("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider>
        <Home />
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider currentUser={null}>
        <Home />
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
