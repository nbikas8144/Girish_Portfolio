function Hero() {
  return (
    <section id="home" className="hero">

      <div className="container hero-container">

        <div className="hero-content">

          <p className="hero-intro">
            Hello, I'm
          </p>

          <h1>
            Girish <span>Nayak</span>
          </h1>

          <h2>
            Aspiring Full Stack / MERN Developer
          </h2>

          <p className="hero-description">
            Computer Science and Engineering student passionate about
            building responsive, scalable and database-driven web
            applications.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="hero-image">

          <div className="profile-circle">
            <span>GN</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;