import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Judges from './components/Judges';
import Sponsors from './components/Sponsors';
import Faq from './components/Faq';
import Recap from './components/Recap';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for home page (renders everything except Recap) */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <AboutUs />
              <Judges />
              <Sponsors />
              <Timeline />
              <Faq />
              {/* <Recap /> */}
              <Footer />
              <Toaster />
            </>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </Router>
  );
}

export default App;
