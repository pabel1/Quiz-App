import React from "react";
import Image from "../Assest/images/3.jpg";
import classes from "../Style/Video.module.css";
export default function Video() {
  return (
    <div>
      <div className={classes.video}>
        <img src={Image} alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </div>
  );
}
