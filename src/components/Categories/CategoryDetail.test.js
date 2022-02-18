import React from "react";
import { render } from "@testing-library/react";
import CategoryDetail from "./CategoryDetail";
import { MemoryRouter, Route } from "react-router-dom";
import { UserProvider } from "../../testUtils";

it("renders without crashing", () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <CategoryDetail />
      </UserProvider>
    </MemoryRouter>
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/category/meta"]}>
      <UserProvider>
        <Route path="/category/:handle">
          <CategoryDetail />
        </Route>
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
