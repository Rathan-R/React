import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)
// const heading = React.createElement("h1", { id: "heading" }, "This is rathan");
// console.log(heading);

// jsx==>html-like or xml-like syntax
const jsxheading = <p id="heading">This is rathan from jsx</p>;
console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);
