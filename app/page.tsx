import HeroName from '@/components/home/HeroName';

const Home = async () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col justify-center">
        <div>
          <h1 className="hero">Simón Muñoz Saavedra</h1>
        </div>
        <div>
          <p>Software Engineer.</p>
        </div>
        <div>
          <p className="text-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, itaque reprehenderit autem, ab voluptates
            saepe molestiae quidem nobis eveniet quia neque voluptas dignissimos voluptatem amet. Illum itaque
            asperiores eaque a! Nostrum fugiat reprehenderit tempore. Adipisci quam natus aspernatur earum, sapiente
            exercitationem id maxime soluta a facilis consequuntur explicabo provident architecto nisi doloremque iste
            blanditiis non ducimus officiis expedita accusantium laborum. Placeat voluptatem numquam quia, debitis natus
            eum soluta est, commodi quos repellat nisi a molestiae blanditiis excepturi temporibus sint eligendi nulla.
            Facere minus sunt rem iusto! Nesciunt architecto incidunt eius?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
