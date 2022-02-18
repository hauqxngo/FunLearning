import React from "react";
import { render } from "@testing-library/react";
import CategoryList from "./CategoryList";

it("matches snapshot", () => {
  const { asFragment } = render(<CategoryList />);
  expect(asFragment()).toMatchSnapshot();
});
