import Container from 'react-bootstrap/Container';

const Home = () => (
  <div class="intro-header">
  <div class="bg-overlay">
    <Container>
      <div class="row">
        <div class="col-lg-12">
          <div class="intro-message">
            <h1>Web Developer</h1>
            <h3>Focused in help startups take their products from concept to launch.</h3>
            <hr class="intro-divider" />
            <ul class="list-inline intro-social-buttons">
              <li>
                <a href="https://twitter.com/marylirulita" target="_blank" class="btn btn-default btn-lg"><i
                    class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
              </li>
              <li>
                <a href="https://github.com/marilirulita" target="_blank" class="btn btn-default btn-lg "><i
                    class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/marbautista/" target="_blank" class="btn btn-default btn-lg"><i
                    class="fa fa-linkedin fa-fw"></i> <span class="network-name">Linkedin</span></a>
              </li>
              <li>
                <a href="https://medium.com/@marilirulita" target="_blank"
                  class="btn btn-default btn-lg"><i class="fa fa-medium fa-fw"></i> <span
                    class="network-name">Medium</span></a>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </Container>
  </div>
</div>
);

export default Home;
