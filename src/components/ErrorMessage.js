import React from "react";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div
      style={{
        color: "red",
        fontSize: "16px",
        fontWeight: "bold",
        marginTop: "10px",
        marginLeft: "48px",
      }}
    >
      {message}
    </div>
  );
};

export default ErrorMessage;
