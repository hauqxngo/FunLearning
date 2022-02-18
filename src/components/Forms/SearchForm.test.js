import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "./SearchForm";
import { MemoryRouter } from "react-router";

it("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <SearchForm />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
