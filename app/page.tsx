import { Home, About, Experience, Projects } from '@/components/section';

const Content = async () => {
  return (
    <div className="flex flex-col items-center">
      <section>
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
};

export default Content;
