import React, { useState } from "react";

function User({ name }) {
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card">
      <h1>Count :{count}</h1>
      <h1>Count :{count2}</h1>
      <h1>Name: {name}</h1>
      <h2>From :Dharapuram</h2>
    </div>
  );
}

export default User;
