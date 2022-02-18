import React from "react";
import { render } from "@testing-library/react";
import Message from "./Message";

it("renders without crashing", () => {
  render(<Message />);
});

it("matches snapshot for danger", () => {
  let messages = ["You're about to delete it.", "Redrum."];
  const { asFragment } = render(<Message type="danger" messages={messages} />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot for success", function () {
  let messages = ["Good to go!"];
  const { asFragment } = render(<Message type="success" messages={messages} />);
  expect(asFragment()).toMatchSnapshot();
});
