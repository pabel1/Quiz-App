import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Components/Contexts/AuthContext";
import classes from "../Style/Account.module.css";

export default function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span class="material-icons-outlined" title="Logout" onClick={logout}>
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
