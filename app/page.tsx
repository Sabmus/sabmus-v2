import HeroName from '@/components/home/HeroName';

const Home = async () => {
  return (
    <div className="w-full">
      <div className="flex h-full flex-col justify-center">
        <div>
          <h1 className="hero big-font mb-3">Simón Muñoz Saavedra.</h1>
        </div>
        <div>
          <h2 className="big-font font-bold">In seek of knowledge.</h2>
        </div>
        <div>
          <p className="mt-5 mb-20 max-w-[540px]">
            Hi there, I'm a Software Engineer who start his career as a web developer with PHP, to then work a couple of
            years with data teams. Currently I'm focused on working as a web developer, since it's really what I love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
