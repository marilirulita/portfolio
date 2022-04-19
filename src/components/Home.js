import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import { ListGroupItem } from 'react-bootstrap';
import '../styles/home.css';


const Home = () => (
  <div className="intro-header">
  <div className="bg-overlay">
    <Container>
      <Row>
        <Col lg={12}> 
          <div className="intro-message">
            <h1>Web Developer</h1>
            <h3>Focused in help startups take their products from concept to launch.</h3>
            <hr className="intro-divider" />
            <ListGroup horizontal as="ul">
              <ListGroupItem as="li">
                <a href="https://twitter.com/marylirulita" target="_blank" className="btn btn-default btn-lg"><i
                    className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
              </ListGroupItem>
              <ListGroupItem as="li">
                <a href="https://github.com/marilirulita" target="_blank" className="btn btn-default btn-lg "><i
                    className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
              </ListGroupItem>
              <ListGroupItem as="li">
                <a href="https://www.linkedin.com/in/marbautista/" target="_blank" className="btn btn-default btn-lg"><i
                    className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
              </ListGroupItem>
              <ListGroupItem as="li">
                <a href="https://medium.com/@marilirulita" target="_blank"
                  className="btn btn-default btn-lg"><i className="fa fa-medium fa-fw"></i> <span
                  className="network-name">Medium</span></a>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        </Row>
      </Container>
  </div>
</div>
);

export default Home;
