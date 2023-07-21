import React from "react";

const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        background: "white",
        color: "red",
        padding: "20px",
        border: "1px solid black",
        margin: "20px",
        width: "300px",
      }}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;
