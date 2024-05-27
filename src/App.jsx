import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";

import { Newsletter } from "./components/Newsletter/Newsletter";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { ContinuingEducation } from "./pages/ContinuingEducation";
import { ContactUs } from "./pages/ContactUs";
import { PreLicensing } from "./pages/PreLicensing";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/continuing-education" element={<ContinuingEducation />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/pre-licensing" element={<PreLicensing />} />
        </Routes>

        <Newsletter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
