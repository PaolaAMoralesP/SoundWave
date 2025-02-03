import React from "react";
import { useNavigate } from "react-router";
import "./button.css";

function Button({ type, className, navigateTo }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (navigateTo) {
      event.preventDefault();
      navigate(navigateTo);
    }
  };

  return (
    <button type={type} onClick={handleClick} className={`base-button ${className || ""}`}>
      Join Now
    </button>
  );
}

export default Button;