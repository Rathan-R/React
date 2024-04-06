import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
      },
    };

    // console.log(this.props.name + "constructor");
  }
  componentDidMount() {
    // const data = await fetch("https://api.github.com/users/rathan-r");
    // const jsonData = await data.json();
    // this.setState({
    //   userInfo: jsonData,
    // });
    this.timer = setInterval(() => {
      console.log("hello");
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    // const { name, location } = this.state.userInfo;

    return (
      <div className="user-card ">
        {/* <h1>Name: {name}</h1>
        <h2>From:{location}</h2> */}
      </div>
    );
  }
}

export default UserClass;
