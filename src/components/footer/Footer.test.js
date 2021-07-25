import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

test("renders footer with the right content", async () => {
  const { getByText } = render(<Footer />);

  const element = getByText("Products");
  const loginElement = getByText("Login");

  expect(element).toBeInTheDocument();
  expect(loginElement).toBeInTheDocument();
});
