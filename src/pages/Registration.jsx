import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../registration.css";
import LogoImage from "../assets/Logo (1).png"; // Import the logo image

const Registration = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement registration logic here
  };

  return (
    <div className="regsignup-container">
      <div className="reglogo-container">
        <img src={LogoImage} alt="Mindease Logo" className="reglogo-image" />
      </div>
      <form className="regsignup-form" onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Enter Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="email"
          placeholder="Enter E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Re-enter password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Link to="/WelcomeScreen">
          <Button type="submit" className="regsignup-button">
            Sign Up
          </Button>
        </Link>
      </form>
      <div className="reglogin-link">
        <p>
          Already have an account? <Link to="/login">LOGIN</Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
