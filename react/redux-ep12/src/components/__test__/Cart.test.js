import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resMenuMockData.json";
import { Provider } from "react-redux";
import appStore from "../../reduxConfigs/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should load Restaurant Menu components", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordianHeader = screen.getByText("Recommended (11)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(11);
});

test("Should add items of Restaurant Menu to cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordianHeader = screen.getByText("Recommended (11)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(11);

  const addButtons = screen.getAllByRole("button", { name: "Add +" });

  expect(screen.getByText("cart-(0 items)")).toBeInTheDocument();

  fireEvent.click(addButtons[0]);
  fireEvent.click(addButtons[1]);
  expect(screen.getByText("cart-(2 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(13);
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart Items.." }));
  expect(screen.getAllByTestId("foodItems").length).toBe(11);

  expect(
    screen.getByText("Your cart is empty.Please add items")
  ).toBeInTheDocument();
});
