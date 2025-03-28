import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FindFamily from "./pages/FindFamily";
import EnglishEducation from "./pages/EnglishEducation";
import Chatbot from "./components/Chatbot";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ConfirmEmailChange from "./pages/ConfirmEmailChange";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/find-family" element={<FindFamily />} />
          <Route path="/english-education" element={<EnglishEducation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/confirm-email-change" element={<ConfirmEmailChange />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
