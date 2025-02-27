import React from "react";
import Button from "./button";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        {this.props.title}
        <Button content='knopka'/>
      </header>
    );
  }
}

export default Header;