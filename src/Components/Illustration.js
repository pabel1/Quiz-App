import React from "react";
import Image from "../Assest/images/signup.svg";
import classes from "../Style/Illustration.module.css";
export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={Image} alt="Signup" />
    </div>
  );
}
