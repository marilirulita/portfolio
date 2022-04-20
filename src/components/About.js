import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Photo from '../pictures/photomine.jpg';
import '../styles/about.css';

const About = () => (
    <div className="content-section-a">
      <div className="bg-overlay2">
        <Container>
          <div className="intro-message">
          <Row>
            <Col lg={5} sm={6}>
                <h2 className="section-heading">Mar Bautista.</h2>
                <p className="lead">
                  I&apos;m a self taught web developer based in Mexico.
                  I&apos;m currently a Freelancer developer open to new
                  challenges improving open-source projects and remote work. 
                  I am focuse in help startups take their products from concept
                  to launch developing web pages and apps for small bussines management. 
                  You can see my 
                  <a className="link" target="_blank" href="www.facebook.com">facebook page</a>
                  for more details.
                </p>
                <h3>Competences:</h3>
                <p className="lead">
                  Languages and Frameworks:
                  Javascript, HTML5, CSS3, Bootstrap3, React, Redux
                  Tools & expertise:
                  Git, Responsive Web Design, Agile Methodologies,
                  Generalist.
                </p>
                <p className="lead">
                  My main goal in life is to use software engineering to create
                  awesome apps and make the life of many people easier.
                </p>
            </Col>
          <Col lg={5} sm={6} className="d-flex justify-content-center">
                <Image fluid className='rounded-circle img-circle' src={Photo} />
            </Col>

          </Row>
          </div>
        </Container>
      </div>
    </div>
);

export default About;
