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
  <div>
    {label ? <label for={id}> {label}</label> : ""}
    <input
      id={id}
      name={name}
      type={type ? type : "text"}
      placeholder={placeholder}
      value={value}
      onclick={handleClick}
      onChange={handleChange}
      className={className ? className : ""}
    />
  </div>
);

export default FormInput;
