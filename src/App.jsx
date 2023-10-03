
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './Components/Nav.jsx';
import CompanyName from './Components/CompanyName.jsx';
import Projects from './Components/Projects.jsx'
import Toronto from './Components/TorontoBackgroundQuote.jsx';
import WhatWeDo from './Components/whatWeDo.jsx';
import Services from './Components/Services.jsx';
import MainForm from './Components/MainForm.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <div>
  <NavBar />
  <CompanyName />
  <Projects />
  <Toronto />
  <WhatWeDo />
  <Services />
  <MainForm />
  <Footer />
  </div>
  );
}

export default App;
