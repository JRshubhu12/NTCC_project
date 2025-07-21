import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import UploadResume from "./Components/UploadResume/UploadResume";
import CareerRecommendations from "./Components/CareerRecommendations/CareerRecommendation";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/UserLogin/Login";
import Register from "./Components/UserRegister/Register";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import PersonalityQuiz from "./Components/PersonalityQuiz/PersonalityQuiz";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/upload-resume" element={<UploadResume />} />
        <Route path="/personality-quiz" element={<PersonalityQuiz/>} />
        <Route path="/recommendations" element={<CareerRecommendations />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
