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
  <div className='form-input'>
    {label ? <label htmlFor={id}> {label}</label> : ""}
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
  </div>
);

export default FormInput;
