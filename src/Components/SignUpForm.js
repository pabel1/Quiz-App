import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Components/Contexts/AuthContext";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignUpForm() {
  const [userName, setUserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    // password validation
    if (password !== confirmPassword) {
      return setError("Password don't match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, userName);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Incorrect password");
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        required
        type="text"
        placeholder="Enter your name.."
        icon="person"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <TextInput
        required
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />

      <TextInput
        required
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextInput
        required
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setconfirmPassword(e.target.value)}
      />
      <CheckBox
        required
        text="I agree to the Terms &amp; Conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />
      <Button disabled={loading} type="submit">
        Submit Now
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
