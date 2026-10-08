
function Experience() {
  return (
    <section id="experience" className="section">

      <div className="container">

        <div className="section-heading">
          <p>My Professional Journey</p>
          <h2>Experience</h2>
        </div>

        <div className="timeline">

          {/* ================= INTERNPE ================= */}

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-date">
                2 Months
              </span>

              <h3>Web Development Intern</h3>

              <h4 className="company-name">
                InternPe — Jaipur, Rajasthan
              </h4>

              <p>
                Worked as a Web Development Intern where I gained
                practical experience in developing responsive web
                interfaces and implementing frontend functionality.
                Worked with modern web development concepts and
                improved my understanding of building user-friendly
                websites.
              </p>

              <div className="timeline-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Web Development</span>
              </div>

            </div>

          </div>


          {/* ================= WEBKOCKET ================= */}

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-date">
                1.5 Months
              </span>

              <h3>Python Intern</h3>

              <h4 className="company-name">
                Webkocket
              </h4>

              <p>
                Worked as a Python Intern and gained practical
                experience in Python programming and development.
                Worked on programming concepts, problem solving
                and building applications using Python.
              </p>

              <div className="timeline-tech">
                <span>Python</span>
                <span>Programming</span>
                <span>Problem Solving</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;