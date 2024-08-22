import { Link } from "react-router-dom";
import "../Splash2.css";
import videoCallImage from "../assets/Video Call_Flatline 1 (1).png"; // Make sure the path is correct

const Splash2 = () => {
  return (
    <div className="splash2-container">
      <div className="splash2-content">
        <h2>
          Connect with specialists right from the comfort of your home via video
          call, audio call, or live chat
        </h2>
        <img src={videoCallImage} alt="Video Call" className="splash2-image" />
      </div>
      <Link to="/splash3">
        <button className="next-button">Next</button>
      </Link>
    </div>
  );
};

export default Splash2;
