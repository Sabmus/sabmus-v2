import { getProjects } from '@/lib/data';
import ProjectCard from './ProjectCard';
import DynamicReveal from '@/components/RevealComp';
import { ProjectInterface } from '@/lib/definitions';

const Projects = async () => {
  const projectsList = await getProjects();

  return (
    <section id="projects" className="mb-20">
      <DynamicReveal>
        <div className="flex flex-col w-5/6 mx-auto">
          <h1 className="title">Projects</h1>
          <div className="grid grid-cols-responsive-220px gap-4">
            {projectsList &&
              projectsList.map((project, idx) => <ProjectCard key={idx} project={project as ProjectInterface} />)}
          </div>
        </div>
      </DynamicReveal>
    </section>
  );
};

export default Projects;
