
import '../Styles/Services.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import choose from '../Images/choose.png'
import appointment from '../Images/appointment.png'
import schedule from '../Images/schedule.png'


function Services(){
  
return (


  <section className="features-icons bg-light text-center services">
  <div className="container">
      <div className="row">
          <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex"><i className="bi-window m-auto text-primary"></i></div>
                  <img 

                  src={choose}
                  alt="Toronto Background" 
                  />
                  <h3>Choose a Project</h3>
                  <p className="lead mb-0">Browse and Pick your Cleaning Project.</p>
              </div>
          </div>
          <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex"><i className="bi-layers m-auto text-primary"></i></div>
                  <img 

                  src={appointment}
                  alt="Toronto Background" 
                  />
                  <h3>Book</h3>
                  <p className="lead mb-0">Secure your Spot with a Quick Booking.</p>
              </div>
          </div>
          <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex"><i className="bi-terminal m-auto text-primary"></i></div>
                  <img 

                  src={schedule}
                  alt="Toronto Background" 
                  />
                  <h3>Schedule</h3>
                  <p className="lead mb-0">Tailor the Schedule to Suit You.</p>
              </div>
          </div>
      </div>
  </div>
</section>
)


}

export default Services;