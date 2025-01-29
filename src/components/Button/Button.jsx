import React from "react";
import { useNavigate } from "react-router"; 
import "./button.css";

function Button() {
    
  const buttonJoin = useNavigate(); 

  const click = () => { buttonJoin("/Join"); 
  };

  return (
    <button type="button" onClick={click}>Join Now</button> 
  );
}

export default Button;