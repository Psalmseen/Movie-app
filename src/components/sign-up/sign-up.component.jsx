import React, { useState } from "react";

import TextInput from "../text-input/text-input.component";
import CustomButton from "../custom-button/custom-button.component";
import createUser from "../../utils/firebase/firebase.utils";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  
  const { email, password, confirmPassword, displayName } = userCredentials;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword || password.length < 1) {
      alert(`password doesn't match pas ${password} !== ${confirmPassword}`);
      setUserCredentials({
        ...userCredentials,
        password: "",
        confirmPassword: "",
      });
    } else {
      createUser({ email, password });
      setUserCredentials({
        email: "",
        password: "",
        confirmPassword: "",
        displayName: "",
      });
    }
  };
  return (
    <form action="#" onSubmit={handleSubmit} className="sign-up">
      <h3 className="title"> Sign up </h3>
      <TextInput
        value={email}
        type='email'
        name="email"
        id="email-up"
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
        type="password-up"
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
      <CustomButton className="sign-up-button"> Sign up</CustomButton>
    </form>
  );
};

export default SignUp;
