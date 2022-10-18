import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FaFirstOrder } from 'react-icons/fa';
import Financial from '../pictures/financialistic.png';
import WebApp from '../pictures/web-app.png';
import MathMag from '../pictures/mathMagicina-screenshot.png';
import '../styles/projects.css';

const Projects = () => (
  <section id="portfolio">
    <div className="bg-overlay">
      <Container>
        <div className="intro-message">
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="section-heading">Projects</h2>
            </Col>
          </Row>
          <Row>
            <Col xl={3} lg={4} sm={6} className="portfolio-item">
              <div className="portfolio-element">
                <div className="top-portafolio-element">
                  <a
                    href="https://tourify-app.netlify.app/"
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

                    <Image
                      className="card-img"
                      src="https://i.imgur.com/Gus9sKi.png"
                      alt="Tourify project Image"
                    />
                  </a>
                </div>
                <div className="portfolio-caption">
                  <h4>Tourify Project</h4>
                  <p id="small-text" className="text-muted">React, Redux, CSS, Ruby on Rails, SQL</p>
                  <a href="https://github.com/marilirulita/Booking-Tours-Front-End" target="_blank" rel="noreferrer">
                    Github Repository
                  </a>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} sm={6} className="portfolio-item">
              <div className="portfolio-element">
                <div className="top-portafolio-element">
                  <a
                    href="https://blooming-tundra-40125.herokuapp.com/"
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

                    <Image
                      className="card-img"
                      src={Financial}
                      alt="Financialistic project Image"
                    />
                  </a>
                </div>
                <div className="portfolio-caption">
                  <h4>Financial App</h4>
                  <p id="small-text" className="text-muted">Ruby, Ruby on Rails, SQL</p>
                  <a
                    href="https://github.com/marilirulita/Financialistic"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repository
                  </a>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} sm={6} className="portfolio-item">
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
                    <Image
                      className="card-img"
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

            <Col xl={3} lg={4} sm={6} className="portfolio-item">
              <div className="portfolio-element">
                <div className="top-portafolio-element">
                  <a
                    href="https://622d22073bf38e6536dab9f0--priceless-borg-af9da9.netlify.app/"
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
                    <Image
                      className="card-img"
                      src={WebApp}
                      alt="Metrics Webapp project Image"
                    />
                  </a>
                </div>
                <div className="portfolio-caption">
                  <h4>Metrics Webapp</h4>
                  <p id="small-text" className="text-muted">React, Redux, CSS</p>
                  <a href="https://github.com/marilirulita/metrics-webapp" target="_blank" rel="noreferrer">Github Repository</a>
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
