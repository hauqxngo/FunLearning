import React from "react";
import { render } from "@testing-library/react";
import CategoryCard from "./CategoryCard";
import { MemoryRouter } from "react-router";

it("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Categories
        handle="alphabet"
        name="Alphabet"
        description="A is for Apple. B is for Bus. C is for Cat."
      />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
