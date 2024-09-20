import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Judges from "./components/Judges";
import Sponsors from "./components/Sponsors";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import Venue from "./components/Venue";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="pin-venue">
                <Hero />
                <AboutUs />
                <Venue pin="pin-venue" />
                <Judges />
                <Sponsors />
                <Faq />
                <Footer />
                <Toaster />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
