import Button from "../Button/Button";
import "./input_form.css";
import { useState } from "react";

function InputField({ label, type, placeholder, value, onChange, error }) {
  return (
    <div className="input-container">
      <label htmlFor={label}>{label}:</label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
}

function Input_form() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const [errors, setErrors] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = { Name: "", Email: "", Password: "" };

    if (formData.Name.trim().length < 3) {
      newErrors.Name = " 💩 Must be 3 characters or more";
      valid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.Email)) {
      newErrors.Email = "💩 Invalid email.";
      valid = false;
    }

    if (formData.Password.length < 6) {
      newErrors.Password = "💩 Password must be at least 6 characters long.";
      valid = false;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/.test(formData.Password)) {
      newErrors.Password = "💩 Password must include an uppercase letter, a lowercase letter, a number, and a special character.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("💜 Form sent successfully");

    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <InputField
        label="Name"
        type="text"
        placeholder="Enter your name"
        value={formData.Name}
        onChange={handleChange}
        error={errors.Name}
      />
      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={formData.Email}
        onChange={handleChange}
        error={errors.Email}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={formData.Password}
        onChange={handleChange}
        error={errors.Password}
      />

      <Button type="submit" className="form-button" />
    </form>
  );
}

export default Input_form;


