function About() {
  return (
    <section id="about" className="section">

      <div className="container">

        <div className="section-heading">
          <p>Get To Know Me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-container">

          <div className="about-card">

            <h3>Who I Am</h3>

            <p>
              I am a Computer Science and Engineering student with an
              interest in full stack web development. I enjoy creating
              responsive and user-friendly web applications.
            </p>

            <p>
              I have experience working with React, Node.js, Express,
              MongoDB, MySQL and REST APIs while developing academic and
              personal projects.
            </p>

          </div>

          <div className="about-info">

            <div className="info-item">
              <strong>Name</strong>
              <span>Girish Nayak</span>
            </div>

            <div className="info-item">
              <strong>Degree</strong>
              <span>B.Tech - Computer Science & Engineering</span>
            </div>

            <div className="info-item">
              <strong>Location</strong>
              <span>Bhubaneswar, Odisha</span>
            </div>

            <div className="info-item">
              <strong>Focus</strong>
              <span>Full Stack / MERN Development</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;