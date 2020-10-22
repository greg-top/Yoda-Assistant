import React from "react";
import "./index.css"; //global styles

class Root extends React.Component {
  state = {
    name: "Grzegorz",
  };

  render() {
    return (
      <h1>My name is {this.state.name}</h1> //
    );
  }
}

export default Root;
