'use server';

import { signIn } from '@/lib/auth';

export const login = async (prevState: any, formData: Iterable<readonly [PropertyKey, any]>) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { email, password });
  } catch (error) {
    return { error: 'Something went wrong' };
  }
};
