import React from "react";
import { useNavigate } from "react-router"; 
import "./button.css";

function Button({type}) {
  
  const buttonJoin = useNavigate(); 

  const click = () => { buttonJoin("/Join"); 
  };

  return (
    <button type={type} onClick={click}>Join Now</button> 
  );
}

export default Button;