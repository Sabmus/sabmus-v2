import { Home, About } from '@/components/section';

const Content = async () => {
  return (
    <div className="flex flex-col items-center w-[1200px]">
      <section>
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
};

export default Content;
