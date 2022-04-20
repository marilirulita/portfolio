import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {
  FaTwitter, FaGithub, FaLinkedin, FaMedium,
} from 'react-icons/fa';
import '../styles/home.css';

const Home = () => (
  <div className="intro-header">
    <div className="bg-overlay">
      <Container>
        <div className="intro-message">
          <h1>Web Developer</h1>
          <h3>Focused in help startups take their products from concept to launch.</h3>
          <hr className="intro-divider" />
          <Row>
            <Col sm={6} md={3} className="mb-3">
              <Button href="https://twitter.com/marylirulita" target="_blank" size="lg" rel="noreferrer" variant="custom">
                <FaTwitter className="fa-fw fa-beat" />
                {' '}
                <span className="network-name">Twitter</span>
              </Button>
            </Col>
            <Col sm={6} md={3} className="mb-3">
              <Button href="https://github.com/marilirulita" target="_blank" size="lg" rel="noreferrer">
                <FaGithub className="fa-fw" />
                {' '}
                <span className="network-name">Github</span>
              </Button>
            </Col>
            <Col sm={6} md={3} className="mb-3">
              <Button href="https://www.linkedin.com/in/marbautista/" target="_blank" size="lg" rel="noreferrer">
                <FaLinkedin className="fa-fw" />
                {' '}
                <span className="network-name">Linkedin</span>
              </Button>
            </Col>
            <Col sm={6} md={3} className="mb-3">
              <Button
                href="https://medium.com/@marilirulita"
                target="_blank"
                size="lg"
                rel="noreferrer"
              >
                <FaMedium className="fa-fw" />
                {' '}
                <span className="network-name">Medium</span>
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  </div>
);

export default Home;
