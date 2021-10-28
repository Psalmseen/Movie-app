import React, { useState } from "react";

import FormInput from "../text-input/text-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { emailSignIn, signUserOut } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const [userCredential, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredential, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailSignIn({email, password})
    setUserCredentials({
      email: "",
      password: "",
    });
  };

  const handleClick = () => {
    signUserOut()
  }
  const { email, password } = userCredential;
  return (
      <form onSubmit={handleSubmit} className="sign-in">
          <h3 className="title"> Sign in </h3>
      <FormInput
        name="email"
        placeholder="Enter email address"
        label="Email"
        id="email-in"
        value={email}
        handleChange={handleChange}
      />
      <FormInput
        name="password"
        placeholder="Enter your password"
        label="Password"
        id="password-in"
        value={password}
        handleChange={handleChange}
      />

      <CustomButton type="submit" className="sign-in-button">
        Sign in
          </CustomButton>
          <span className='or' > or </span>
      <CustomButton type="button" onClick={handleClick} className="google-sign-in-button">
        Sign in with google
      </CustomButton>
    </form>
  );
};

export default SignIn;
