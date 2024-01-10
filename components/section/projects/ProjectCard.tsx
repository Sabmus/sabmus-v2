import { ExternalLink, Github } from 'lucide-react';
import { projectIcons } from '@/constants/iconsSize';

interface ProjectInterface {
  title: string;
  description: string;
  techs: string[];
  links: {
    url: string;
    icon: string;
  }[];
}

const iconSwitch = (exp: string) => {
  switch (exp) {
    case 'github':
      return <Github size={projectIcons} className="icon" />;
    case 'demo':
      return <ExternalLink size={projectIcons} className="icon" />;
  }
};

const ProjectCard = ({ project }: { project: ProjectInterface }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-2 glowGradient blur opacity-0 transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
      <div className="relative px-2 py-2 bg-background rounded-md hover:glowBox">
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-lg text-special_2">{project.title}</h1>
          <ul className="flex list-none gap-3">
            {project.links &&
              project.links.map((link, jdx) => (
                <li key={jdx}>
                  <span>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {iconSwitch(link.icon)}
                    </a>
                  </span>
                </li>
              ))}
          </ul>
        </div>
        <p>{project.description}</p>
        <ul className="flex gap-2">
          {project.techs &&
            project.techs.map(tech => (
              <li key={tech}>
                <span className="font-mono inline-flex items-center border border-detail rounded-lg px-2 text-sm font-semibold">
                  {tech}
                </span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
