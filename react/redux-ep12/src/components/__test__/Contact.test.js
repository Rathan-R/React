import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// 1.render
// 2.Querying
// 3.Assertion

describe("Contact Us Page Test Case ", () => {
  /* 
  // to do something before all the test cases use beforeAll
  beforeAll(() => {
    console.log("Before All");
  });

  // to do something before each test cases we need to use beforeEach
  beforeEach(() => {
    console.log("Before Each test");
  });

  // to do something after all the test cases use sfterAll
  afterAll(() => {
    console.log("After All");
  });
  // to do something after each test cases we need to use afterEach

  afterEach(() => {
    console.log("After Each test");
  }); */

  test("Should load contact us component ", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact us component ", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
  });
  //both test and it are same there is no difference
  it("Should load input name inside contact us component ", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Enter your Message");
    //Assertion
    expect(input).toBeInTheDocument();
  });

  test("Should load 2 input inside contact us component ", () => {
    render(<Contact />);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //console.log(inputBoxes); it is a jsx element(react element )or react fiber or virtual dom or object
    //Assertion
    // inputBoxes.map((inputBox) => expect(inputBox).toBeInTheDocument());
    expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes.length).not.toBe(3);
  });
});
