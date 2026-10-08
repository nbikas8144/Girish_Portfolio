const skillGroups = [
  {
    title: "Programming",
    skills: [
      "C",
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP"
    ]
  },

  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React",
      "EJS"
    ]
  },

  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js"
    ]
  },

  {
    title: "Database",
    skills: [
      "MongoDB",
      "MySQL"
    ]
  },

  {
    title: "API",
    skills: [
      "REST API"
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">

      <div className="container">

        <div className="section-heading">
          <p>What I Work With</p>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">

          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>

              <h3>{group.title}</h3>

              <div className="skill-list">

                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;