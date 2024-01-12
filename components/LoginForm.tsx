'use client';

import { useFormState } from 'react-dom';
import { login } from '@/lib/actions';
import Input from '@/components/ui/Input';

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-5 items-center mt-7">
      <Input type="email" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" />

      <button className="mt-4 w-72 h-10 btn">Login</button>
      {state && state.error && <p>{state.error}</p>}
    </form>
  );
};

export default LoginForm;
