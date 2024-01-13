'use server';

import { signIn } from '@/lib/auth';
import { AuthError } from 'next-auth';
import dbConnect from '@/lib/dbConn';
import Tech from '@/db/models/Tech';
import mongoose from 'mongoose';

export const login = async (prevState: any, formData: FormData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { email, password });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid username or password.' };
        default:
          return { error: 'Something went wrong.' };
      }
    }

    // Error: NEXT_REDIRECT
    // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
    throw error;
  }
};

export const createProject = async (prevState: any, formData: FormData) => {
  const { title, description, techs, githubLink, demoLink } = Object.fromEntries(formData);

  // prettier-ignore
  const regexForTechs = '^\{"[0-9a-f]{24}":true(,"[0-9a-f]{24}":true)*\}$'
};

export const getTechs = async () => {
  try {
    await dbConnect();
    const techs = await Tech.find({}, { name: 1 }).exec();
    return techs;
  } catch (error) {
    console.log(error);
    mongoose.connection.close();
    return [];
  }
};
