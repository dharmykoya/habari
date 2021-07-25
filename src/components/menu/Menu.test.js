import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import Menu from "./Menu";

test("handles clicks event on menu icon", async () => {
  const handleClick = jest.fn();

  const { getByTestId } = render(<Menu handleClick={handleClick} />);

  const element = getByTestId("menu");

  fireEvent.click(element);

  expect(handleClick).toHaveBeenCalled();
});
