import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.components";
import Custombutton from "../custom-button/custom-button.components";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

const SignIn = ({ emailSignINStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignINStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">Sign In</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          label="password"
          value={password}
          required
        />
        <Custombutton className="buttons mb-4" type="submit">
          {" "}
          Sign In{" "}
        </Custombutton>
        <Custombutton
          className="buttons"
          type="button"
          onClick={googleSignInStart}
          isGoogleSignIn
        >
          Sign In with Google
        </Custombutton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignINStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
