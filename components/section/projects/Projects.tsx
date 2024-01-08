'use client';

import { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import options from '@/lib/srConfig';

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
  const revealDiv = useRef(null);

  /**
   * https://github.com/jlmakes/scrollreveal/issues/541
   */
  useEffect(() => {
    async function animate() {
      if (revealDiv.current) {
        const sr = (await import('@/lib/sr')).default;
        sr.reveal(revealDiv.current, options());
      }
    }
    animate();
  }, []);

  return (
    <section id="projects">
      <div ref={revealDiv}>
        <h1 className="title">Projects</h1>

        <div className="w-5/6 grid grid-cols-responsive-350px gap-4 mx-auto">
          {projectsList && projectsList.map((project, idx) => <ProjectCard key={idx} project={project} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
