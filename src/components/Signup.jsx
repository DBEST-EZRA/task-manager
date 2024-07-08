import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Config"; // Import Firebase authentication instance
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up:", userCredential.user.email);
      navigate("/signup/details"); // Redirect to details signup page
    } catch (error) {
      console.error("Error signing up:", error.message);
      setError(error.message);
      // Handle error (display error message to user)
    }
  };

  return (
    <div className="signup">
      <h2>Welcome to Havard Writers Hub</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
