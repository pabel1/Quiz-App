import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "../Style/Login.module.css";
import Button from "./Button";
import { useAuth } from "./Contexts/AuthContext";
import Form from "./Form";
import Illustration from "./Illustration";
import TextInput from "./TextInput";
export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const navigate = useNavigate();

  const { login } = useAuth();

  async function handler(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Incorrect password");
    }
  }

  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <Form className={classes.login} onSubmit={handler}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            type="password"
            placeholder="Enter password"
            icon="lock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button disabled={loading} type="submit">
            Submit Now
          </Button>
          {error && <p className="error">{error}</p>}

          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </div>
  );
}
