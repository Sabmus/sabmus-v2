import { ExternalLink, Github } from 'lucide-react';
import { projectIcons } from '@/constants/iconsSize';
import Badge from '@/components/ui/Badge';
import { ProjectInterface } from '@/lib/definitions';

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
    <div className="relative group h-fit">
      <div className="absolute -inset-2 glowGradient blur opacity-0 transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
      <div className="relative px-2 pb-4 pt-2 rounded-md bg-background-lighter hover:glowBox h-56">
        <div className="flex flex-col h-full">
          <div className="flex-sticky-footer">
            <div className="flex items-center justify-between gap-2">
              <h1 className="text-lg text-special_2">{project.title}</h1>
              <ul className="flex list-none gap-3">
                {project.urls &&
                  project.urls.map((link, jdx) => (
                    <li key={jdx}>
                      {link.url && (
                        <span>
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {iconSwitch(link.name)}
                          </a>
                        </span>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <p>{project.description}</p>
            </div>
          </div>
          <div className="shrink-0">
            <ul className="flex gap-2 flex-wrap">
              {project.techs &&
                project.techs.map(tech => (
                  <li key={tech._id}>
                    <Badge name={tech.name} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
