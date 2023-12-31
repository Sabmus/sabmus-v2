import HeroName from '@/components/home/HeroName';

const Home = async () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-4/5 mt-20">
        <HeroName />
      </div>
    </div>
  );
};

export default Home;
