import React from "react";
import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

const SignInPage = () => (
  <div className="sign-in-page">
    <input
      type="checkbox"
      className="toggle"
      name="toggle-sign-in"
      id="toggle-sign-in"
    />
    <div className="container">
      <SignIn />
      <SignUp />
    </div>
  </div>
);

export default SignInPage;
