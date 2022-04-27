import '../styles/contact.css';

const Contact = () => (
  <div className="banner">
    <div className="bg-overlay">
      <div className="container">
        <div className="intro-message">
          <h2 className="connect">
            Check out some of my latest work at
            {' '}
            <a className="link-footer" target="_blank" href="https://www.facebook.com/Desarrollo-Web-Freelancer-104683862235097/" rel="noreferrer">
              Mar Bautistas Facebook Page.
            </a>
          </h2>
        </div>

        <div className="col-lg-6">
          <ul className="list-inline banner-social-buttons">
            <li>
              <a href="https://twitter.com/marylirulita" target="_blank" className="btn btn-default btn-lg" rel="noreferrer">
                <i
                  className="fa fa-twitter fa-fw"
                />
                {' '}
                <span className="network-name">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/marilirulita" target="_blank" className="btn btn-default btn-lg " rel="noreferrer">
                <i
                  className="fa fa-github fa-fw"
                />
                {' '}
                <span className="network-name">Github</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/marbautista/" target="_blank" className="btn btn-default btn-lg" rel="noreferrer">
                <i
                  className="fa fa-linkedin fa-fw"
                />
                {' '}
                <span className="network-name">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@marilirulita" target="_blank" className="btn btn-default btn-lg" rel="noreferrer">
                <i
                  className="fa fa-medium fa-fw"
                />
                {' '}
                <span className="network-name">Medium</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
