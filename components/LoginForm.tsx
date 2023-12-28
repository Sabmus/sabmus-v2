'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';

const LoginForm = () => {
  const params = useSearchParams();
  const session = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState<string | null>('');

  useEffect(() => {
    setError(params.get('error'));
  }, [params]);

  if (session.status === 'authenticated') {
    router.push('/Member');
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setError('');

    const { email, password } = formData;

    signIn('credentials', { email, password });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-1/3">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} required />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <input type="submit" value="Login" className="bg-blue-300 hover:gb-blue-100" />
      </form>
      <p className="text-red-500">{error}</p>
    </>
  );
};

export default LoginForm;
