import React, { useState } from "react";

const Button = (props) => {
  let [click, setClick] = useState(0);
  console.log(click);
  return (
    <button onClick={() => setClick(click++)}>
      {props.content}
    </button>
  );
}

export default Button;