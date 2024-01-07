import { Home, About, Experience, Projects } from '@/components/section';

const Content = () => {
  return (
    <div className="flex flex-col items-center">
      <Home />
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default Content;
