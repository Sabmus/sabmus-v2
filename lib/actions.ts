'use server';

import { signIn } from '@/lib/auth';
import { AuthError } from 'next-auth';
import dbConnect from '@/lib/dbConn';
import { Tech, Project } from '@/db/models';
import mongoose from 'mongoose';
import { z } from 'zod';
import { auth } from '@/lib/auth';

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

export const createProject = async (prevState: any, formData: FormData) => {
  const session = await auth();

  const parsedData = z
    .object({
      title: z.string().min(4),
      description: z.string().min(10),
      techs: z.string().regex(/^\{"[0-9a-f]{24}":true(,"[0-9a-f]{24}":true)*\}$/),
      githubLink: z.string().url(),
      demoLink: z.string().url(),
    })
    .safeParse(Object.fromEntries(formData));

  if (!parsedData.success) return { error: 'Invalid input.' };

  let { title, description, techs, githubLink, demoLink } = parsedData.data;
  techs = JSON.parse(techs);
  const techsList = Object.keys(techs).map(id => id);

  const urlsMap = [
    {
      name: 'github',
      url: githubLink,
    },
    {
      name: 'demo',
      url: demoLink,
    },
  ];

  try {
    await dbConnect();
    await Project.create({
      title,
      description,
      techsList,
      urlsMap,
      author: session?.user?.id,
    });
    return { message: 'created!' };
  } catch (error) {
    console.log(error);
    mongoose.connection.close();
    return { error: 'Something went wrong.' };
  }
};
