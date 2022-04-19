const Projects = () => (
  <section id="portfolio" className="bg-light-gray bounds">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">Awesomeness Portfolio.</h2>
          <h3 id="below-section" className="section-subheading text-muted">Below you&apos;ll find some of my recent work.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a
            href="https://gorgeous-crepe-fc5afc.netlify.app/"
            target="_blank"
            className="portfolio-link"
            data-toggle="modal"
            rel="noreferrer"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-fire fa-3x" />
              </div>
            </div>
            <img
              src="./pictures/screenshot_bookstore.png"
              className="img-responsive"
              alt=""
            />
          </a>
          <div className="portfolio-caption">
            <h4>Bookstore Project</h4>
            <p id="small-text" className="text-muted">React, Redux, CSS</p>
            <a href="https://github.com/marilirulita/bookstore" target="_blank" rel="noreferrer">
              Github Repository
            </a>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 portfolio-item portfolio2">
          <a
            href="https://priceless-shannon-9c10ff.netlify.app/"
            className="portfolio-link"
            target="_blank"
            data-toggle="modal"
            rel="noreferrer"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-fire fa-3x" />
              </div>
            </div>
            <img
              src="./pictures/to-do-list-screenshot.png"
              className="img-responsive"
              alt=""
            />
          </a>
          <div className="portfolio-caption">
            <h4>To Do List</h4>
            <p id="small-text" className="text-muted">JavaScript, CSS, HTML</p>
            <a href="https://github.com/marilirulita/ToDoList" target="_blank" rel="noreferrer">Github Repository</a>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 portfolio-item">
          <a
            href="https://math-magicians-r.herokuapp.com/math-magicians"
            target="_blank"
            className="portfolio-link"
            data-toggle="modal"
            rel="noreferrer"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-fire fa-3x" />
              </div>
            </div>
            <img
              src="./pictures/mathMagicina-screenshot.png"
              className="img-responsive"
              alt=""
            />
          </a>
          <div className="portfolio-caption">
            <h4>Math Magicians Web Page</h4>
            <p id="small-text" className="text-muted">React, CSS</p>
            <a href="https://github.com/marilirulita/math-magicians" target="_blank" rel="noreferrer">Github Repository</a>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 portfolio-item">
          <a
            href="https://team-space-ship.netlify.app/"
            target="_blank"
            className="portfolio-link"
            data-toggle="modal"
            rel="noreferrer"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-fire fa-3x" />
              </div>
            </div>
            <img
              src="./pictures/space-travelers__rockets.png"
              className="img-responsive"
              alt=""
            />
          </a>
          <div className="portfolio-caption">
            <h4>Space Travelers</h4>
            <p id="small-text" className="text-muted">React, Redux, CSS</p>
            <a href="https://github.com/aimemalaika/space-travelers" target="_blank" rel="noreferrer">Github Repository</a>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Projects;
