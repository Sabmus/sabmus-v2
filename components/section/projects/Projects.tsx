import ProjectCard from './ProjectCard';
import DynamicReveal from '@/components/RevealComp';

const projectsList = [
  {
    title: 'project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nesciunt aliquam ea a qui est ab voluptatibus necessitatibus voluptates quasi ratione optio distinctio aliquid nihil temporibus possimus recusandae, incidunt dolorem!',
    techs: ['NextJS', 'VS Code', 'Git'],
    links: [
      {
        url: 'https://github.com/sabmus',
        icon: 'github',
      },
      {
        url: 'https://github.com/sabmus',
        icon: 'demo',
      },
    ],
  },
  {
    title: 'project 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nesciunt aliquam ea a qui est ab voluptatibus necessitatibus voluptates quasi ratione optio distinctio aliquid nihil temporibus possimus recusandae, incidunt dolorem!',
    techs: ['NextJS', 'VS Code', 'Git'],
    links: [
      {
        url: 'https://github.com/sabmus',
        icon: 'github',
      },
      {
        url: 'https://github.com/sabmus',
        icon: 'demo',
      },
    ],
  },
  {
    title: 'project 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nesciunt aliquam ea a qui est ab voluptatibus necessitatibus voluptates quasi ratione optio distinctio aliquid nihil temporibus possimus recusandae, incidunt dolorem!',
    techs: ['NextJS', 'VS Code', 'Git'],
    links: [
      {
        url: 'https://github.com/sabmus',
        icon: 'github',
      },
      {
        url: 'https://github.com/sabmus',
        icon: 'demo',
      },
    ],
  },
  {
    title: 'project 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nesciunt aliquam ea a qui est ab voluptatibus necessitatibus voluptates quasi ratione optio distinctio aliquid nihil temporibus possimus recusandae, incidunt dolorem!',
    techs: ['NextJS', 'VS Code', 'Git'],
    links: [
      {
        url: 'https://github.com/sabmus',
        icon: 'github',
      },
      {
        url: 'https://github.com/sabmus',
        icon: 'demo',
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mb-40">
      <DynamicReveal>
        <div className="flex flex-col w-5/6 mx-auto">
          <h1 className="title">Projects</h1>
          <div className="grid grid-cols-responsive-220px gap-4">
            {projectsList && projectsList.map((project, idx) => <ProjectCard key={idx} project={project} />)}
          </div>
        </div>
      </DynamicReveal>
    </section>
  );
};

export default Projects;
