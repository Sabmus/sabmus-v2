import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/auth.config';
import { redirect } from 'next/navigation';

const Member = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/Member');
  }

  return (
    <div>
      <h1>Server Member</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  );
};

export default Member;
