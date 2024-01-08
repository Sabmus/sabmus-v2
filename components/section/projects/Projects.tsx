import ProjectCard from './ProjectCard';

const projectsList = [
  {
    title: 'project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nesciunt aliquam ea a qui est ab voluptatibus necessitatibus voluptates quasi ratione optio distinctio aliquid nihil temporibus possimus recusandae, incidunt dolorem!',
    techs: ['NextJS', 'VS Code', 'Git'],
    links: [
      {
        url: 'https://github.com/sabmus',
        icon: 'icon',
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
        icon: 'icon',
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
        icon: 'icon',
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
        icon: 'icon',
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
    <section id="projects">
      <h1 className="title">Projects</h1>
      <div className="w-5/6 grid grid-cols-responsive-350px gap-2 mx-auto">
        {projectsList && projectsList.map((project, idx) => <ProjectCard key={idx} project={project} />)}
      </div>
    </section>
  );
};

export default Projects;
