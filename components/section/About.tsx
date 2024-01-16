import { Terminal } from 'lucide-react';
import { techMarker } from '@/constants/iconsSize';
import Image from 'next/image';
import profilePic from '@/public/images/SimonF3P1.png';
import DynamicReveal from '@/components/RevealComp';
import Badge from '@/components/ui/Badge';

const About = () => {
  const techs = ['Javascript', 'Typescript', 'NodeJs', 'ReactJS', 'SQL / NoSQL'];

  return (
    <section id="about">
      <DynamicReveal>
        <div className="flex justify-center items-center w-5/6 mx-auto">
          <div className="flex flex-col">
            <h1 className="title">About me</h1>
            <div className="grid grid-cols-responsive-200px gap-7">
              <div className="flex flex-col gap-3">
                <p>
                  Hi! my name is Simón Muñoz Saavedra, I{"'"}m a software engineer from Chile and I love to learn. When
                  I start my career I wasn{"'"}t quite sure on what path to follow, so I decide to join a big
                  professional services partnership company. I stayed there for 8 month due to lack of technical
                  professional development.
                </p>
                <p>
                  After that I work as a web development with technologies such as PHP, .NET, and SQL. To then explore
                  the data world, working on data related positions for about 3.5 years.
                </p>
                <p>
                  One day I thought that I would never read about data related topics on a Sunday afternoon but I will
                  enjoy reading about web development. So here I{"'"}m!.
                </p>
                <p>
                  My objective is to become a full-stack developer and have the privilege to work with a web development
                  team.
                </p>
                <p>Here are my main technologies:</p>
                <div className="grid grid-cols-2 gap-2 font-mono">
                  {techs &&
                    techs.map((tech, i) => (
                      // <span key={tech} className="flex items-center gap-1">
                      //   <Terminal size={techMarker} className="text-special_2" />
                      //   {tech}
                      // </span>
                      <Badge key={i} name={tech} />
                    ))}
                </div>
              </div>
              <div className="relative flex flex-col items-center">
                <Image
                  src={profilePic}
                  alt="my-photo"
                  quality={90}
                  width={400}
                  height={400}
                  priority
                  className="rounded-3xl hover:drop-shadow-glow hover:brightness-105 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </DynamicReveal>
    </section>
  );
};

export default About;
