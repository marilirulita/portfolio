const Contact = () => (
  <div className="banner">
    <div className="bg-overlay4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="connect">
              Check out some of my latest work at
              <a
                className="link-footer"
                target="_blank"
                href="www.facebook.com"
              >
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
  </div>
);

export default Contact;
