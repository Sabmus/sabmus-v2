import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth.config';

const About = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>about</h1>

      {session && <p>hello, you are logged in</p>}
    </div>
  );
};

export default About;
