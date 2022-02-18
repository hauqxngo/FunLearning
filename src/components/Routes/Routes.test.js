import React from "react";
import { render } from "@testing-library/react";
import Routes from "./Routes";
import { MemoryRouter } from "react-router";
import { UserProvider } from "../../testUtils";

it("renders without crashing", () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <Routes />
      </UserProvider>
    </MemoryRouter>
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider>
        <Routes />
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
