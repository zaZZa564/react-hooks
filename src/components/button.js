import React, { useEffect, useState } from "react";

const Button = (props) => {
  let [click, setClick] = useState(0);
  
  useEffect(() => {
    document.title = `count = ${click}`;
  });

  return (
    <button onClick={() => setClick(click++)}>
      {props.content}
    </button>
  );
}

export default Button;