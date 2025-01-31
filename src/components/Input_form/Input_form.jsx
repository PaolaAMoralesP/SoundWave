import "./input_form.css";


function InputField({ label, type, placeholder }) {
  return (
  <div className="input-container">
  <label htmlFor={label}>{label}:</label>
  <input type={type} id={label} placeholder={placeholder} />
  </div> 
);
}

function Input_form() { 
  return (
  <div className="form-container">
<InputField label="Name" type="text" placeholder="Enter your name" />
<InputField label="Email" type="email" placeholder="Enter your email" />
<InputField label="Password" type="password" placeholder="Enter your password" />
<button className="submit-button">Join Now</button>
</div> 
);
 }


export default Input_form;


