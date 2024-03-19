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
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rathan-r");
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
  }

  render() {
    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <h1>Name: {name}</h1>
        <h2>From:{location}</h2>
      </div>
    );
  }
}

export default UserClass;
