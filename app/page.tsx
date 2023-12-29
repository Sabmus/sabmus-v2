import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth.config';

const Home = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>Home</h1>
      {session && <p>hello!! now logged in as: {session?.user?.name}</p>}
    </div>
  );
};

export default Home;
