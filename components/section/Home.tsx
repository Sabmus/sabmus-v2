const Home = () => {
  return (
    <section>
      <div className="flex flex-col justify-center">
        <h1 className="hero big-font">Simón Muñoz Saavedra.</h1>
        <h2 className="big-font font-bold">Software Engineer.</h2>
        <p className="max-w-[540px] my-10">
          Hi there, I{"'"}m a Software Engineer who start his career as a web developer with PHP, to then work a couple
          of years with data teams. Currently I{"'"}m focused on working as a web developer, since it{"'"}s really what
          I love.
        </p>
        <a className="w-fit px-8 py-3 border text-detail border-detail rounded-md transition-all hover:text-white hover:cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:shadow-boxy">
          Download Resume ✨
        </a>
      </div>
    </section>
  );
};

export default Home;
