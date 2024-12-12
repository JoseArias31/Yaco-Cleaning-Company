
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Nav.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function NavBar() {

  const navigate = useNavigate();

  const handleHashLink = (hash) => {
    if (window.location.pathname !== "/") {
      navigate("/"); // Redirige al inicio
    }
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Hace scroll
      }
    }, 100); // Asegura que la página cargó antes de hacer scroll
  };

  return (
    
    <nav id="NavBar" className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div className="container">
     
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link"onClick={() => handleHashLink("projects")} href="#projects">What We Do</a>
          </li>
          <li className="nav-item">
          <Link to="/booking" className="nav-link" onClick={() => handleHashLink("booking")}>Book</Link>
</li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => handleHashLink("gallery")} href="#gallery">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"onClick={() => handleHashLink("comments")} href="#comments">Comments</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"onClick={() => handleHashLink("contactUs")}href="#contactUs">Contact Us</a>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
 
  );
}

export default NavBar;