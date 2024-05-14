import { Container, Row, Col } from 'react-bootstrap';
import Cleaning from '../Images/Cleaning.png'
import '../Styles/AboutUs.css'

const AboutUs = () => {
  return (
    <Container>
      <Row>
        {/* Column for Content */}
        <Col md={6}>
          <div className='aboutUsP'>
            <h2>About Us</h2>
            <p>
            At <strong>YaCo Cleaning</strong>, we believe in the importance of maintaining clean and organized spaces. Our mission is to provide customized cleaning solutions for homes, offices, and construction projects. Whether you need the freshness of a clean home, the efficiency of a spotless office, or post-construction cleaning, we are here to meet your expectations.</p>
            <p>
Our team of highly skilled professionals strives to deliver impeccable service on every visit. We take pride in offering exceptional customer service and results that exceed expectations. At YaCo Cleaning, your satisfaction is our priority.
            </p>
            {/* Add more content here */}
          </div>
        </Col>
        {/* Column for Image */}
        <Col md={6} className='AboutUsImg'>
          <img
            src={Cleaning}
            alt="About Us"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
