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
  ...otherProps
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
        {...otherProps}
      />
    </label>
  </div>
);

export default FormInput;
