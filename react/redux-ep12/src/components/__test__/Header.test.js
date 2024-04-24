import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../reduxConfigs/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render header component with login button", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Querying
  const button = screen.getByRole("button", { name: "Login" }); //it is good way to find
  //   const button = screen.getByText("Login");

  expect(button).toBeInTheDocument();
});

test("Should render component with cart items 0", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Querying
  const cart = screen.getByText("cart-(0 items)");

  //   const cart = screen.getByText(/items/); //Regex we need not specify exact thing

  expect(cart).toBeInTheDocument();
});

test("Should render component with cart", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Querying
  const cart = screen.getByText(/cart/);

  //   const cart = screen.getByText(/items/); //Regex we need not specify exact thing

  expect(cart).toBeInTheDocument();
});

test("Should change Login button to Logout on click", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Querying
  const loginBtn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginBtn); //to perform click event now the btn will be clicked and changed to logout btn
  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(logoutBtn).toBeInTheDocument();
});

test("Should change Logout button to Login on click", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Querying
  const loginBtn1 = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginBtn1);
  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  fireEvent.click(logoutBtn); //to perform click event now the btn will be clicked and changed to logout btn
  const loginBtn = screen.getByRole("button", { name: "Login" });
  expect(loginBtn).toBeInTheDocument();
});

//online or offline

test("Should check the online network status of the app", () => {
  //render
  Object.defineProperty(window, "navigator", {
    value: { onLine: true },
    writable: true,
  });
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Querying
  const online = screen.getByTestId("networkStatus");
  expect(online.textContent).toBe("🟢");
});

test("Should check the offline network status of the app", () => {
  //render
  Object.defineProperty(window, "navigator", {
    value: {
      ...window.navigator,
      onLine: false,
    },
    configurable: true,
  });

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Querying
  const offline = screen.getByTestId("networkStatus");
  console.log(offline.textContent);
  // expect(offline.textContent).toBe("🔴");
});
