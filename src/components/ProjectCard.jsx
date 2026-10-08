function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <div className="project-image">
        <img src={project.img} alt={project.title} />
      </div>

      <div className="project-content">

        <h3>{project.title}</h3>

        <p>
          {project.description}
        </p>

        <div className="project-tech">

          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}

        </div>

        <div className="project-buttons">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            Live Demo
          </a>

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;