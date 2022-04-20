import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FaFirstOrder } from "react-icons/fa";
import Bookstore from "../pictures/screenshot_bookstore.png";
import ToDoList from "../pictures/to-do-list-screenshot.png";
import MathMag from "../pictures/mathMagicina-screenshot.png";
import Space from "../pictures/space-travelers__rockets.png";
import '../styles/projects.css';

const Projects = () => (
  <section id="portfolio">
    <div className="bg-overlay">
    <Container>
      <div className="intro-message">
      <Row>
        <Col lg={12} className="text-center">
          <h2 className="section-heading">Portfolio.</h2>
          <h3 id="below-section">These are some of my projects.</h3>
        </Col>
      </Row>
      <Row>
        <Col lg={3} sm={6} className="portfolio-item">
          <div className="portfolio-element">
          <div className="top-portafolio-element">
          <a
            href="https://gorgeous-crepe-fc5afc.netlify.app/"
            target="_blank"
            className="portfolio-link"
            data-toggle="modal"
            rel="noreferrer"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <FaFirstOrder size="100px" />
              </div>
            </div>
            
            <Image fluid
              src={Bookstore}
              alt="Bookstore project Image"
            />
          </a>
          </div>
          <div className="portfolio-caption">
            <h4>Bookstore Project</h4>
            <p id="small-text" className="text-muted">React, Redux, CSS</p>
            <a href="https://github.com/marilirulita/bookstore" target="_blank" rel="noreferrer">
              Github Repository
            </a>
          </div>
          </div>
        </Col>

        <Col lg={3} sm={6} className="portfolio-item">
        <div className="portfolio-element">
        <div className="top-portafolio-element">
          <a
            href="https://priceless-shannon-9c10ff.netlify.app/"
            className="portfolio-link"
            target="_blank"
            data-toggle="modal"
            rel="noreferrer"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
              <FaFirstOrder size="100px" />
              </div>
            </div>
            <Image fluid
              src={ToDoList}
              alt="To Do List project Image" className="img-responsive"
            />
          </a>
          </div>
          <div className="portfolio-caption">
            <h4>To Do List</h4>
            <p id="small-text" className="text-muted">JavaScript, CSS, HTML</p>
            <a href="https://github.com/marilirulita/ToDoList" target="_blank" rel="noreferrer">Github Repository</a>
          </div>
          </div>
        </Col>

        <Col lg={3} sm={6} className="portfolio-item">
        <div className="portfolio-element">
        <div className="top-portafolio-element">
          <a
            href="https://math-magicians-r.herokuapp.com/math-magicians"
            target="_blank"
            className="portfolio-link"
            data-toggle="modal"
            rel="noreferrer"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
              <FaFirstOrder size="100px" />
              </div>
            </div>
            <Image fluid
              src={MathMag}
              alt="Math Magician project Image"
            />
          </a>
          </div>
          <div className="portfolio-caption">
            <h4>Math Magicians</h4>
            <p id="small-text" className="text-muted">React, CSS</p>
            <a href="https://github.com/marilirulita/math-magicians" target="_blank" rel="noreferrer">Github Repository</a>
          </div>
          </div>
        </Col>

        <Col lg={3} sm={6} className="portfolio-item">
        <div className="portfolio-element">
        <div className="top-portafolio-element">
          <a
            href="https://team-space-ship.netlify.app/"
            target="_blank"
            className="portfolio-link"
            data-toggle="modal"
            rel="noreferrer"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
              <FaFirstOrder size="100px" />
              </div>
            </div>
            <Image fluid
              src={Space}
              alt="Space Travelers project Image"
            />
          </a>
          </div>
          <div className="portfolio-caption">
            <h4>Space Travelers</h4>
            <p id="small-text" className="text-muted">React, Redux, CSS</p>
            <a href="https://github.com/aimemalaika/space-travelers" target="_blank" rel="noreferrer">Github Repository</a>
          </div>
          </div>
        </Col>

      </Row>
      </div>
    </Container>
    </div>
  </section>
);

export default Projects;
