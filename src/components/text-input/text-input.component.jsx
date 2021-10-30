import React from "react";

const FormInput = ({
  value,
  id,
  label,
  handleChange,
  placeholder,
  name,
  type,
  handleClick,
  className,
}) => (
  <div className="form-input">
    <label htmlFor={id}>
      <span> {label}</span>
      <input
        id={id}
        name={name}
        type={type ? type : "text"}
        placeholder={placeholder}
        value={value}
        onClick={handleClick}
        onChange={handleChange}
        className={className ? className : ""}
      />
    </label>
  </div>
);

export default FormInput;
