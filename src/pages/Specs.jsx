import "../specs.css";

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="header">
          <div className="status-bar"></div>
        </div>
        <h2 className="welcome-text">Welcome!</h2>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Full name"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Enter E-mail"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Specification"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Certification"
            className="input-field"
          />
          <button className="add-button">+</button>
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Enter password"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Re-enter password"
            className="input-field"
          />
        </div>
        <button className="signup-button">Sign Up</button>
        <div className="footer">
          <span>Already have an account?</span>
          <a href="#" className="login-link">
            LOGIN
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
