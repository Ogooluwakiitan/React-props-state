import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        style={{
          padding: "12px",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
        }}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
