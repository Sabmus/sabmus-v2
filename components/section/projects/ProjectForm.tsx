'use client';

import Input from '@/components/ui/Input';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Github, ExternalLink } from 'lucide-react';
import { createProject } from '@/lib/actions';
import { useFormState } from 'react-dom';

const ProjectForm = () => {
  const [state, formAction] = useFormState(createProject, undefined);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5 border border-purple-800 rounded-md p-5 bg-background-lighter"
    >
      <Input id="name" type="text" name="title" placeholder="Title" />
      <div className="relative bg-background-lighter">
        <textarea
          name="description"
          id="description"
          rows={5}
          placeholder="Project description"
          className="peer bg-transparent min-h-[auto] w-full rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 pt-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
        ></textarea>
        <label
          htmlFor="description"
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
        >
          Project description
        </label>
      </div>

      <ToggleGroup type="multiple">
        <ToggleGroupItem value="a" name="a" className="h-7">
          Javascript
        </ToggleGroupItem>
        <ToggleGroupItem value="b" name="b" className="h-7">
          React
        </ToggleGroupItem>
        <ToggleGroupItem value="c" name="c" className="h-7">
          Node
        </ToggleGroupItem>
      </ToggleGroup>

      <div className="flex flex-col gap-5 w-full">
        <div className="flex gap-4 items-center">
          <Github size={30} />
          <Input id="github-link" type="text" name="github-link" placeholder="Github link" />
        </div>
        <div className="flex gap-4 items-center">
          <ExternalLink size={30} />
          <Input id="demo-link" type="text" name="demo-link" placeholder="Demo link" />
        </div>
      </div>

      <button className="btn w-1/2 mx-auto">Add project</button>
    </form>
  );
};

export default ProjectForm;
