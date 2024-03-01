import React from "react";
import ReactDOM  from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "head" }, "this is a namaste react series"),
    React.createElement("h2", { id: "head2" }, "I am h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "head" }, "I am heading"),
    React.createElement("h2", { id: "head2" }, "I am h2"),
  ]),
]);
console.log(parent); //object--->this object is a react element

/* const h1 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from react!!"
);
console.log(h1); */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
