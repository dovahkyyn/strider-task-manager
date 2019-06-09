import React, { Component } from "react";
import logo from "../logo.svg";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>
    );
  }
}

export default Navbar;
