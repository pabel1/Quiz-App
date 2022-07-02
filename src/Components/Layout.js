import React from "react";
import classes from "../Style/Layout.module.css";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </div>
  );
}
