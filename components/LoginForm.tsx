'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';

const LoginForm = () => {
  const params = useSearchParams();
  const { data: session, status } = useSession();

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>('');

  /*  if (session.status === 'authenticated') {
    router.push('/Member');
  } */

  useEffect(() => {
    setError(params.get('error'));
  }, [params]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError('');

    const { email, password } = formData;

    const data = await signIn('credentials', { redirect: false, callbackUrl: '/', email, password });
    router.push(data?.url!);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-1/3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={formData.email}
          required
          autoComplete="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <input type="submit" value="Login" className="bg-blue-300 hover:gb-blue-100" autoComplete="off" />
      </form>
      <p className="text-red-500">{error}</p>
    </>
  );
};

export default LoginForm;
