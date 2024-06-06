import { useEffect } from "react";
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
import { ThankYou } from "./pages/ThankYou";
import { AboutUs } from "./pages/AboutUs";
function App() {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.id = "form-script-tag-11996048";
  //   script.src = "https://go.rempower.com/public/remote/page/1851366560f792d23397cbad1aac077203cc9d31.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/continuing-education" element={<ContinuingEducation />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pre-licensing" element={<PreLicensing />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>

        <Newsletter />
        {/* <div id="script-placeholder"></div> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
