import { render, screen } from "@testing-library/react";
import RestaurantCard, { WithCategory } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

import "@testing-library/jest-dom";

test("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard dataSet={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});

test("Should render RestaurantCard component with Veg label", () => {
  // const higherOrderComponent = WithCategory(RestaurantCard);
  // render(<higherOrderComponent props={MOCK_DATA} />);
  // const category = screen.getByText("Pizza Hut");
  // expect(category).toBeInTheDocument();
});
