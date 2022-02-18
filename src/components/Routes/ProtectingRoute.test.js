import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { UserProvider } from "../../testUtils";
import ProtectingRoute from "./ProtectingRoute";

it("renders without crashing", () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <ProtectingRoute />
      </UserProvider>
    </MemoryRouter>
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider>
        <ProtectingRoute />
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider currentUser={null}>
        <ProtectingRoute />
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
