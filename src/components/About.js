import React from 'react';

const About = () => (
  <div className="about__content">
    <div className="content-section-a">
      <div className="bg-overlay2">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-6">

              <div className="clearfix">
                <h2 className="section-heading">Web Developer.</h2>
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
              </div>
              <div className="col-lg-5 col-lg-offset-2 col-sm-6 collapse navbar-collapse">
                <img
                  className="img-circle img-responsive"
                  src="./photomine.jpg"
                  alt=""
                  width="300px"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
