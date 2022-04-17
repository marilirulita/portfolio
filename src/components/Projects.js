const Projects = () => (
  <section id="portfolio" class="bg-light-gray bounds">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading">Awesomeness Portfolio.</h2>
        <h3 id="below-section" class="section-subheading text-muted">Below you'll find some of my recent work.</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-sm-6 portfolio-item">
        <a href="https://gorgeous-crepe-fc5afc.netlify.app/" target="_blank" class="portfolio-link"
          data-toggle="modal">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-fire fa-3x"></i>
            </div>
          </div>
          <img src="./pictures/screenshot_bookstore.png"
            class="img-responsive" alt="" />
          </a>
        <div class="portfolio-caption">
          <h4>Bookstore Project</h4>
          <p id="small-text" class="text-muted">React, Redux, CSS</p>
          <a href="https://github.com/marilirulita/bookstore" target="_blank">Github Repository
          </a>
        </div>
      </div>


      <div class="col-md-4 col-sm-6 portfolio-item portfolio2">
        <a href="https://priceless-shannon-9c10ff.netlify.app/" class="portfolio-link" target="_blank"
          data-toggle="modal">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-fire fa-3x"></i>
            </div>
          </div>
          <img src="./pictures/to-do-list-screenshot.png"
            class="img-responsive" alt="" />
        </a>
        <div class="portfolio-caption">
          <h4>To Do List</h4>
          <p id="small-text" class="text-muted">JavaScript, CSS, HTML</p>
          <a href="https://github.com/marilirulita/ToDoList" target="_blank">Github Repository</a>
        </div>
      </div>

      <div class="col-md-4 col-sm-6 portfolio-item">
        <a href="https://math-magicians-r.herokuapp.com/math-magicians" target="_blank" class="portfolio-link"
          data-toggle="modal">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-fire fa-3x"></i>
            </div>
          </div>
          <img src="./pictures/mathMagicina-screenshot.png"
            class="img-responsive" alt="" />
        </a>
        <div class="portfolio-caption">
          <h4>Math Magicians Web Page</h4>
          <p id="small-text" class="text-muted">React, CSS</p>
          <a href="https://github.com/marilirulita/math-magicians" target="_blank">Github Repository</a>
        </div>
      </div>


      <div class="col-md-4 col-sm-6 portfolio-item">
        <a href="https://team-space-ship.netlify.app/" target="_blank" class="portfolio-link"
          data-toggle="modal">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-fire fa-3x"></i>
            </div>
          </div>
          <img src="./pictures/space-travelers__rockets.png"
            class="img-responsive" alt="" />
        </a>
        <div class="portfolio-caption">
          <h4>Space Travelers</h4>
          <p id="small-text" class="text-muted">React, Redux, CSS</p>
          <a href="https://github.com/aimemalaika/space-travelers" target="_blank">Github Repository</a>
        </div>
      </div>

    </div>
  </div>
</section>
);

export default Projects;
