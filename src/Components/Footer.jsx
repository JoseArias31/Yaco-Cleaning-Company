
import '../Styles/Footer.css'
function Footer() {
return(

          <div className="container-fluid my-5">
            <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331' }}>
              <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '' }}>
                <div className="me-5">
                  <span>Get connected with us on social networks:</span>
                </div>
                                                 
                <div>
                  <a href="mailto:gojosearias@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white me-4">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="https://instagram.com/gojosearias?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer" className="text-white me-4">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </section>
      
              <section className="">
                <div className="container text-center text-md-start mt-5">
                  <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold">Yaco Cleaning</h6>
                      <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                      <p>
                      We are a well-established cleaning company located in Toronto, offering exceptional cleaning solutions for homes, offices, and post-construction sites. Our services cater to both residential and commercial spaces, ensuring pristine cleanliness across Toronto and throughout Canada.
                      </p>
                    </div>
      
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold">Products</h6>
                      <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                      <p>
                        <a href="#projects" className="text-white">Houses</a>
                      </p>
                      <p>
                        <a href="#projects" className="text-white">Offices</a>
                      </p>
                      <p>
                        <a href="#projects" className="text-white">Post-Construction</a>
                      </p>
                     
                    </div>
      
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                      <h6 className="text-uppercase fw-bold">Contact</h6>
                      <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                      <p><i className="fas fa-home mr-3"></i> Toronto, ON.</p>
                      <p><i className="fas fa-envelope mr-3"></i> info@yacocleaning.com.com</p>
                      <p><i className="fas fa-phone mr-3"></i> +1 647-425-2986</p>
                    </div>
                  </div>
                </div>
              </section>
      
              <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                ©CopyRigth 2023 Yaco Cleaning Powered by  
                <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://josearias31.github.io/Portfolio-2023/"> Jose Arias</a>
              </div>
            </footer>
          </div>
        );
      }
      
    

export default Footer;


