import React from "react";

const IconButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="iconButton">
      {children}
    </button>
  );
};

export default IconButton;
