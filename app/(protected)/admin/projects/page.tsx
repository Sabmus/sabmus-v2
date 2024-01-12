import Link from 'next/link';

const Projects = () => {
  return (
    <div className="flex justify-between items-center">
      <h3 className="adminTitle">Project List</h3>
      <Link href="/admin/projects/create" className="btn px-3">
        Add Project
      </Link>
    </div>
  );
};

export default Projects;
