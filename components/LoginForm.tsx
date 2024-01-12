'use client';

import { useFormState } from 'react-dom';
import { login } from '@/lib/actions';

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-3 w-1/3">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required autoComplete="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" required />
      <button>Login</button>
      {state && state.error && <p>{state.error}</p>}
    </form>
  );
};

export default LoginForm;
