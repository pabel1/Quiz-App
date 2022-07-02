import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assest/images/logo-bg.png";
import classes from "../Style/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/" className={classes.brand}>
              <img src={Logo} alt="Learn with Sumit Logo" />
              <h3>Learn with Sumit</h3>
            </Link>
          </li>
        </ul>
        <Account />
      </nav>
    </div>
  );
}
