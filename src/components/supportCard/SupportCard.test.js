import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SupportCard from "./SupportCard";

import RightCircleIcon from "../../assets/icons/RightCircleIcon";

test("renders support card", async () => {
  const title = "title";
  const description = "my descriptions";
  const { getByText } = render(
    <MemoryRouter>
      <SupportCard
        icon={<RightCircleIcon />}
        title={title}
        description={description}
      />
    </MemoryRouter>
  );

  const element = getByText("title");
  const descriptionElement = getByText("my descriptions");

  expect(element).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});
