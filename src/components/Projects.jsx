import ProjectCard from "./ProjectCard";

const projects = [
  {
    img:"https://jobconnect.club/uploads/logo/jobconnect-portal-share.png",
    title: "Job Connection Portal",

    description:
      "A job search and application portal with recruiter job management, authentication, job and application CRUD operations.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Passport.js",
      "REST API"
    ],

    github: "#",
    live: "#"
  },

  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDRDuOiPkouZXJXzL2QPytohJwOkr_M711Q4BGsRUD6ervibYb6iXYSUo&s=10",
    title: "Amazon Clone",

    description:
      "A responsive e-commerce style website with organized product, category and banner layouts.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MySQL"
    ],

    github: "#",
    live: "#"
  },

  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM8MTyNSzCnxxxJLEVOcyE_rIwtEP5pHMKF3iNPVuxovNZuScyT9UUabY&s=10",
    title: "Life Care Hospital",

    description:
      "A responsive hospital website presenting services, doctors, departments and contact information.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MySQL"
    ],

    github: "#",
    live: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="section">

      <div className="container">

        <div className="section-heading">
          <p>My Recent Work</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;