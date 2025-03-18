import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.email === email)) {
      alert("Email already exists! Try logging in.");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");
    navigate("/login");  // Correct way to navigate
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-danger">Signup</h2>
      <form onSubmit={handleSignup} className="mt-4">
        <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn btn-danger w-100">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
