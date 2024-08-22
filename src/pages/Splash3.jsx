import { Link } from "react-router-dom";
import "../splash3.css";
import DoctorImage from "../assets/undraw_doctors_hwty 1 (1).png"; // Import the doctor image

const ChooseDoctor = () => {
  return (
    <div className="splash3-container">
      <div className="image-container">
        <img
          src={DoctorImage}
          alt="Choose your doctor"
          className="doctor-image"
        />
      </div>
      <div className="content-container">
        <h1 className="title">CHOOSE THE DOCTOR YOU WANT</h1>
        <p className="description">
          Get the option to choose a specialist according to your specifications
        </p>
        <Link to="/login">
          <button className="next-button">Next</button>
        </Link>
        <div className="specialist-link">
          <a href="/specs">Are you a specialist? Get Here</a>
        </div>
      </div>
    </div>
  );
};

export default ChooseDoctor;
