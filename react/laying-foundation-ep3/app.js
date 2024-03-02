import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)
// const heading = React.createElement("h1", { id: "heading" }, "This is rathan");
// console.log(heading);

// jsx==>html-like or xml-like syntax

//React Element
const heading = <h1 id="heading">This is rathan heading from jsx</h1>;

//React functional Component
const HeadingComponent = () => <h1>this is functional component</h1>;
const HeadingComponent2 = () => (
  <div>
    <p>Element inside component</p>
    {heading}
    <p>component inside component</p>
    <HeadingComponent />
    <HeadingComponent></HeadingComponent>

    {HeadingComponent()}
    <h1>this is functional component2</h1>
  </div>
);

// const HeadingComponent2 = () => <h1>this is functional component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
