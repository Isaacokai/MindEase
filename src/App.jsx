import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./splash.css";
import SplashScreen from "./pages/SplashScreen";
import Splash2 from "./pages/Splash2";
import Splash3 from "./pages/Splash3";
import Specs from "./pages/Specs";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import WelcomeScreen from "./pages/WelcomeScreen";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/splash2" element={<Splash2 />} />
        <Route path="/splash3" element={<Splash3 />} />
        <Route path="/specs" element={<Specs />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
