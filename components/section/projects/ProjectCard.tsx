interface ProjectInterface {
  title: string;
  description: string;
  techs: string[];
  links: {
    url: string;
    icon: string;
  }[];
}

const ProjectCard = ({ project }: { project: ProjectInterface }) => {
  return (
    <div className="px-2 py-2">
      <h1>{project.title}</h1>
      <h1>{project.description}</h1>
      <ul className="flex">
        {project.techs.map(tech => (
          <li key={tech}>
            <span>{tech}</span>
          </li>
        ))}
      </ul>
      <ul className="flex">
        {project.links.map((link, jdx) => (
          <li key={jdx}>
            <span>{link.icon}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
