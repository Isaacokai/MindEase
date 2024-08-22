import { Link } from "react-router-dom";
import Button from "../components/Button";
import "../welcome-screen.css";

const WelcomeScreen = () => {
  return (
    <div className="welcome-screen">
      <h1>Welcome to MindEase</h1>
      <p>Your mental wellness companion</p>
      <Link to="/doctor-profile">
        <Button>Find a Doctor</Button>
      </Link>
    </div>
  );
};

export default WelcomeScreen;
