import { Home, About, Experience, Projects } from '@/components/section';

const Content = () => {
  return (
    <div className="flex flex-col items-center">
      {/**<div className="absolute bg-background w-full h-screen z-50"></div> */}

      <Home />
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default Content;
