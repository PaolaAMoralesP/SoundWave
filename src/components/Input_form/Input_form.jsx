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
      newErrors.Name = "El nombre debe tener al menos 3 caracteres.";
      valid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.Email)) {
      newErrors.Email = "Correo electrónico no válido.";
      valid = false;
    }

    if (formData.Password.length < 6) {
      newErrors.Password = "La contraseña debe tener al menos 6 caracteres.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" }); // Limpiar error al escribir
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Formulario enviado correctamente");
      console.log("Datos:", formData);
      // Aquí puedes manejar el envío a una API
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
      <button type="submit" className="submit-button">
        Join Now
      </button>
    </form>
  );
}

export default Input_form;


