import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

//class based component
class About extends React.Component {
  constructor() {
    super();

    // console.log("parent class constructor");
  }
  componentDidMount() {
    // console.log("parent Component did mount");
    // this.timer = setInterval(() => {
    //   console.log("hello");
    // }, 1000);
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
  }

  render() {
    // console.log("parent render");
    return (
      <div>
        <h2>About</h2>
        <p>This is about user details</p>
        <UserContext.Consumer>
          {(data) => <li>{data.loggedInUser}</li>}
        </UserContext.Consumer>
        {/* <User name={"Rathan from (function)"} /> */}
        {/* <UserClass/> */}
      </div>
    );
  }
}

//functional component
// const About = () => {
//   return (
//     <div>
//       <h2>About</h2>
//       <p>This is about user details</p>
//       {/* <User name={"Rathan from (function)"} /> */}
//       <UserClass name={"firstChild (class)"} />\
//       <UserClass name={"SecondChild (class)"} />
//       <UserClass name={"ThirdChild (class)"} />
//     </div>
//   );
// };

export default About;
