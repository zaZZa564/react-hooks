import React from "react";

const Button = (props) => {
  return (
    <button>{props.content}</button>
  );
}

Button.defaultProps = {
  content: 'knopka'
}

export default Button;