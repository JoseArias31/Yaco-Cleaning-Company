
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Nav.css';

function NavBar() {
  return (
    
    <nav id="NavBar" className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div className="container">
     
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">What We Do</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#gallery">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#HCB_comment_box">Comments</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contactUs">Contact Us</a>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
 
  );
}

export default NavBar;