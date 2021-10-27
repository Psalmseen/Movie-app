import React, { useState } from "react";
import TextInput from "../text-input/text-input.component";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: [value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserCredentials({
      email: "",
      password: "",
      confirmPassword: "",
      displayName: "",
    });
  };
  const { email, password, confirmPassword, displayName } = userCredentials;
  return (
    <form action="#" onSubmit={handleSubmit} className="sign-up">
      <h3 className="title"> Sign up </h3>
      <TextInput
        value={email}
        name="email"
        id="email"
        label="Email:"
        handleChange={handleChange}
        placeholder="enter your email address"
      />
      <TextInput
        value={password}
        name="password"
        type="password"
        id="password"
        label="Password:"
        handleChange={handleChange}
        placeholder="enter your password"
      />
      <TextInput
        value={confirmPassword}
        name="confirmPassword"
        type="password"
        id="confirmPassword"
        label="Confirm Password:"
        handleChange={handleChange}
        placeholder="Confirm your password"
      />
      <TextInput
        value={displayName}
        name="displayName"
        id="displayName"
        label="Display Name:"
        handleChange={handleChange}
        placeholder="Choose a display name"
        />
      <button className='sign-up-button'> Sign up</button>
    </form>
  );
};

export default SignUp;
