import { Link } from "react-router-dom";
import Button from "../components/Button";
import "../splash.css";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src="src/assets/Logo (1).png" alt="MindEase Logo" className="logo" />
      <Link to="/splash2">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};
export default SplashScreen;
