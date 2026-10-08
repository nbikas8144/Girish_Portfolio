const education = [
  {
    degree: "B.Tech, Computer Science and Engineering",
    institution:
      "Gandhi Institute of Excellent Technocrats, BPUT",
    year: "2023 - 2027",
    result: "CGPA: 8.0 through 6th semester"
  },

  {
    degree: "+2 Science",
    institution:
      "Anchalika Higher Secondary School, CHSE",
    year: "2023",
    result: "50%"
  },

  {
    degree: "Class 10",
    institution:
      "Sardar Sangram Sing High School, BSE",
    year: "2021",
    result: "67%"
  }
];

function Education() {
  return (
    <section id="education" className="section education-section">

      <div className="container">

        <div className="section-heading">
          <p>My Academic Background</p>
          <h2>Education</h2>
        </div>

        <div className="education-grid">

          {education.map((item) => (
            <div className="education-card" key={item.degree}>

              <span className="education-year">
                {item.year}
              </span>

              <h3>{item.degree}</h3>

              <p>{item.institution}</p>

              <strong>{item.result}</strong>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;