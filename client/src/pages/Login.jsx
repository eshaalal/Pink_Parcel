import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(user => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");  // Correct way to navigate
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-danger">Login</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn btn-danger w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
