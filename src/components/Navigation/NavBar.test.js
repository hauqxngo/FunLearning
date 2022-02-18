import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import NavBar from "./NavBar";
import { UserProvider } from "../../testUtils";

it("renders without crashing", () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <NavBar />
      </UserProvider>
    </MemoryRouter>
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider>
        <NavBar />
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider currentUser={null}>
        <NavBar />
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
