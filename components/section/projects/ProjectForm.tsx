'use client';

import Input from '@/components/ui/Input';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Github, ExternalLink } from 'lucide-react';
import { createProject } from '@/lib/actions';
import { useFormState } from 'react-dom';
import { useState } from 'react';

interface ITechs {
  [key: string]: boolean;
}
interface ITechlist {
  _id: string;
  name: string;
}

const ProjectForm = ({ techList }: { techList: ITechlist[] }) => {
  const [state, formAction] = useFormState(createProject, undefined);
  const [techs, setTechs] = useState<ITechs>({});
  console.log('🚀 ~ ProjectForm ~ state:', state);

  const handleClick = (id: string) => {
    setTechs(prevState => {
      if (prevState[id]) {
        delete prevState[id];
        return { ...prevState };
      } else {
        return { ...prevState, [id]: true };
      }
    });
  };

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5 border w-full h-full border-purple-800 rounded-md p-5 bg-background-lighter"
    >
      <Input id="name" type="text" name="title" placeholder="Title" />
      <div className="relative bg-background-lighter">
        <textarea
          name="description"
          id="description"
          rows={5}
          placeholder="Project description"
          className="peer bg-transparent min-h-10 w-full rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 pt-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
        ></textarea>
        <label
          htmlFor="description"
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
        >
          Project description
        </label>
      </div>

      <ToggleGroup type="multiple" className="flex justify-start items-center flex-wrap">
        {techList &&
          techList.map((tech, i) => (
            <ToggleGroupItem
              key={i}
              value={tech.name}
              name={tech.name}
              onClick={() => handleClick(tech._id)}
              className="h-7 w-fit"
            >
              {tech.name}
            </ToggleGroupItem>
          ))}
      </ToggleGroup>

      <input type="hidden" name="techs" value={JSON.stringify(techs)} />

      <div className="flex flex-col gap-5 w-full">
        <div className="flex gap-4 items-center">
          <Github size={30} />
          <Input id="githubLink" type="text" name="githubLink" placeholder="Github link" />
        </div>
        <div className="flex gap-4 items-center">
          <ExternalLink size={30} />
          <Input id="demoLink" type="text" name="demoLink" placeholder="Demo link" />
        </div>
      </div>

      <button className="btn w-1/2 mx-auto">Add project</button>

      <div>{state?.error && <div className="text-red-500 text-center text-sm font-semibold">{state.error}</div>}</div>
    </form>
  );
};

export default ProjectForm;
