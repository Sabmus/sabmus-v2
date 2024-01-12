import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
import ProjectForm from '@/components/section/projects/ProjectForm';

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
        <ProjectForm />
      </div>
    </div>
  );
};

export default CreateProject;
