import { Terminal } from 'lucide-react';
import { techs } from '@/constants/techs';
import { techMarker } from '@/constants/icons';
import Image from 'next/image';
import profilePic from '@/public/images/F3_1_optimized.webp';

const About = () => {
  return (
    <section id="about">
      <div className="flex justify-center items-center w-5/6 mx-auto">
        <div className="flex flex-col gap-3">
          <h1 className="title">About me</h1>
          <div className="grid grid-cols-responsive-200px">
            <div>
              <p>
                Hi! my name is Simón Muñoz Saavedra, I{"'"}m a software engineer from Chile and I love to learn. When I
                start my career I wasn{"'"}t quite sure on what path to follow, so I decide to join a big professional
                services partnership company. I stayed there for 8 month due to lack of technical professional
                development.
              </p>
              <br />
              <p>
                After that I work as a web development with technologies such as PHP, .NET, and SQL. To then explore the
                data world, working on data related positions for about 3.5 years.
              </p>
              <br />
              <p>
                One day I thought that I would never read about data related topics on a Sunday afternoon but I will
                enjoy reading about web development. So here I{"'"}m!.
              </p>
              <br />
              <p>
                My objective is to become a full-stack developer and have the privilege to work with a web development
                team.
              </p>
              <br />
              <p>Here are my main technologies:</p>
              <br />
              <div className="grid grid-cols-2 grid-rows-3 gap-2 font-mono">
                {techs.map(tech => (
                  <span key={tech} className="flex items-center gap-1">
                    <Terminal size={techMarker} className="text-special_2" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative flex flex-col items-center">
              <Image
                src={profilePic}
                alt="my-photo"
                priority
                quality={90}
                className="rounded-2xl hover:drop-shadow-white hover:scale-110 hover:brightness-105 transition-all h-80 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
