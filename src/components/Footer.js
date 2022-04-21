import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

const Footer = () => (
  <footer>
    <Container>
      <ListGroup horizontal="sm">
        <ListGroup.Item><Link to="/">Home</Link></ListGroup.Item>
        <ListGroup.Item><Link to="/about">About</Link></ListGroup.Item>
        <ListGroup.Item><Link to="/projects">Projects</Link></ListGroup.Item>
        <ListGroup.Item><Link to="/contact">Contact</Link></ListGroup.Item>
      </ListGroup>
      <p className="copyright text-muted small">
        Copyright &copy; Mar Bautista Web Developer Freelance 2022. All Rights Reserved
      </p>
    </Container>
  </footer>
);

export default Footer;
