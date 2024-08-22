import "../login.css";
import googleLogo from "../assets/google-logo-825006 1.png"; // Add the path for the Google logo image
import facebookLogo from "../assets/google-logo-825006 1 (1).png"; // Add the path for the Facebook logo image
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="header">
          <div className="status-bar"></div>
        </div>
        <h2 className="welcome-text">Welcome Back!</h2>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Username"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Enter password"
            className="input-field"
          />
        </div>
        <button className="login-button">Log In</button>
        <div className="divider">
          <hr />
          <span>OR</span>
          <hr />
        </div>
        <button className="social-button google-button">
          <img src={googleLogo} alt="Google Logo" className="social-logo" />
          Login with Google
        </button>
        <button className="social-button facebook-button">
          <img src={facebookLogo} alt="Facebook Logo" className="social-logo" />
          Login with Facebook
        </button>
        <div className="footer">
          <Link to="/forgot-password">
            <span className="forgot-password">FORGOT PASSWORD ?</span>
          </Link>
          <div className="signup">
            <span>Don’t have an account?</span>
            <a href="/registration">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
