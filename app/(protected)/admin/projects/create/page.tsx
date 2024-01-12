import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
import Input from '@/components/ui/Input';

const CreateProject = () => {
  return (
    <div className="relative flex flex-col items-center h-full">
      <div className="mb-2">
        <Link href="/admin/projects" className="absolute left-0 -top-1 text-detail">
          <MoveLeft className="hover:cursor-pointer" size={28} />
        </Link>
        <h1 className="adminTitle">New Project</h1>
      </div>
      <div className="h-full w-full tabletL:w-1/3">
        <form action="" className="flex flex-col gap-5">
          <Input id="name" type="text" name="title" placeholder="Title" />
          <div className="relative bg-background-lighter">
            <textarea
              name="description"
              id="description"
              rows={5}
              placeholder="Project description"
              className="peer bg-transparent min-h-[auto] w-full rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
            ></textarea>
            <label
              htmlFor="description"
              className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
            >
              Project description
            </label>
          </div>

          <label htmlFor="tech-select">Choose Tech:</label>
          <select name="tech-select" id="tech-select" autoComplete="on">
            <option value="">choose and option</option>
            <option value="Javascript">Javascript</option>
            <option value="Git">Git</option>
          </select>

          <input type="text" placeholder="links" />
          <button className="btn">submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
