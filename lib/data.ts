import dbConnect from '@/lib/dbConn';
import { Tech, Project } from '@/db/models';
import mongoose from 'mongoose';
import { unstable_noStore as noStore } from 'next/cache';

export const getTechs = async () => {
  noStore();

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

export const getProjects = async () => {
  noStore();

  try {
    await dbConnect();
    const projects = await Project.find({}, { author: 0, __v: 0, createdAt: 0, updatedAt: 0 }).populate('techs').lean();
    return projects;
  } catch (error) {
    console.log(error);
    mongoose.connection.close();
    return [];
  }
};
