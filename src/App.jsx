import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingPage from "./Components/BookingPage.jsx";
import NavBar from "./Components/Nav.jsx";
import CompanyName from './Components/CompanyName.jsx'
import Projects from './Components/Projects.jsx'
import AboutUs from './Components/AboutUs.jsx'
import Booking from "./Components/Booking.jsx";
import Toronto from "./Components/TorontoBackgroundQuote.jsx"
import WhatWeDo from "./Components/WhatWeDo.jsx";
import Services from "./Components/Services.jsx";
import MainForm from "./Components/MainForm.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <Router>
      {/* Always displayed components */}
      <NavBar />
      <Routes>
        {/* Route for Booking Page */}
        <Route path="/booking" element={<BookingPage />} />
        
        {/* Main homepage route */}
        <Route
          path="/"
          element={
            <div>
                 
              <CompanyName />
              <Projects />
              <AboutUs />
              <Booking />
              <Toronto />
              <WhatWeDo />
              <Services />
              <MainForm />
             
            </div>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
