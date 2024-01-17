'use server';

import { signIn } from '@/lib/auth';
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import dbConnect from '@/lib/dbConn';
import { Project } from '@/db/models';
import mongoose from 'mongoose';
import { z } from 'zod';
import { auth } from '@/lib/auth';

const ProjectFormSchema = z.object({
  _id: z.string(),
  title: z.string().min(4),
  description: z.string().min(10),
  techs: z.string().regex(/^\{"[0-9a-f]{24}":true(,"[0-9a-f]{24}":true)*\}$/),
  githubLink: z.union([z.literal(''), z.string().url()]),
  demoLink: z.union([z.literal(''), z.string().url()]),
});

const CreateProject = ProjectFormSchema.omit({ _id: true });

export type ProjectState = {
  errors?: {
    title?: string[];
    description?: string[];
    techs?: string[];
    githubLink?: string[];
    demoLink?: string[];
  };
  message?: string | null;
};

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

export const createProject = async (prevState: ProjectState, formData: FormData) => {
  const session = await auth();

  const validateFields = CreateProject.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    techs: formData.get('techs'),
    githubLink: formData.get('githubLink'),
    demoLink: formData.get('demoLink'),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Failed to create project.',
    };
  }

  let { title, description, techs, githubLink, demoLink } = validateFields.data;
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
      techs: techsList,
      urls: urlsMap,
      author: session?.user?.id,
    });
  } catch (error) {
    console.log(error);
    mongoose.connection.close();
    return { message: 'Database error.' };
  }

  revalidatePath('/admin/projects');
  redirect('/admin/projects');
};

export const deleteProject = async (id: string) => {
  try {
    await dbConnect();
    await Project.findByIdAndDelete(id);
    revalidatePath('/admin/projects');
  } catch (error) {
    console.log(error);
    mongoose.connection.close();
    return { message: 'Database error.' };
  }
};
