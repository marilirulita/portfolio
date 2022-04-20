import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Photo from '../pictures/photomine.jpg';
import '../styles/about.css';

const About = () => (
  <div className="content-section-a">
    <div className="bg-overlay">
      <Container>
        <div className="intro-message">
              <Image fluid className='rounded-circle img-circle' src={Photo} />
         
              <h2 className="section-heading">Mar Bautista.</h2>
              <p>
              I&apos;m a self taught web developer based in Mexico.
              I&apos;m currently a Freelancer developer open to new
              challenges improving open-source projects and remote work.
              I am focuse in help startups take their products from concept
              to launch developing web pages and apps for small bussines management.
              You can see my <a target="_blank" href="www.facebook.com">facebook page</a> for more details.
            </p>
            <h4>Languages and Frameworks:</h4>
            <p>
              Javascript, HTML5, CSS3, Bootstrap3, React, Redux
            </p>
            <h4>Tools & expertise:</h4>
            <p>
            Git, Responsive Web Design, Agile Methodologies,
              Generalist.
            </p>
            <p>
              My main goal in life is to use software engineering to create
              awesome apps and make the life of many people easier.
            </p>
            
        </div>
      </Container>
    </div>
  </div>
);

export default About;
