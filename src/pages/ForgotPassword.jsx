import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../forgot-password.css";
import LogoImage from "../assets/Logo (1).png"; // Import the logo image
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement forgot password logic
  };

  return (
    <div className="forgot-password-page">
      <div className="logo-container">
        <img src={LogoImage} alt="Mindease Logo" className="logo-image" />
      </div>
      <h1>Forgot Password? No Problem</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          type="email"
          placeholder="Email"
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
        <Link to="/login">
          <Button type="submit" className="reset-button">
            Reset Password
          </Button>
        </Link>
        <div className="signup">
          <span>Don’t have an account?</span>
          <a href="/registration">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
