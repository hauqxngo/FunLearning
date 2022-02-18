import React from "react";
import { render } from "@testing-library/react";
import ItemDetail from "./ItemDetail";
import { UserProvider } from "../../testUtils";

it("matches snapshot", () => {
  let item = { name: "Aa" };
  const { asFragment } = render(
    <UserProvider>
      <ItemDetail item={item} />
    </UserProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
