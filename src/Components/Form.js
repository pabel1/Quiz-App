import React from "react";
import classes from "../Style/Form.module.css";

export default function Form({ children, className, ...rest }) {
  return (
    <div>
      <form className={`${className} ${classes.form}`} {...rest}>
        {children}
      </form>
      
    </div>
  );
}
