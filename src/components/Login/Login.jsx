import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { handleLogin, error, setError } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleAuth() {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email, navigate);
  }

  useEffect(() => {
    setError(false);
  }, []);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Link to="/forgot-password">Forgot Password?</Link>

      <Button variant="primary" type="submit" onClick={handleLogin}>
        Submit
      </Button>

      <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
        <button className="button border-0" type="submit" onClick={handleAuth}>
          Login
        </button>
        <Link to="/signup" className="button signup">
          SignUp
        </Link>
      </div>
    </Form>
  );
}

export default Login;
