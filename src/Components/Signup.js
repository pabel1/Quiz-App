import React from "react";
import classes from "../Style/Signup.module.css";
import Illustration from "./Illustration";
import SignUpForm from "./SignUpForm";
export default function Signup() {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration className={classes.illustration} />
        <SignUpForm />
      </div>
    </div>
  );
}
