import Link from 'next/link';
import { getProjects } from '@/lib/data';
import { deleteProject } from '@/lib/actions';
import { Key } from 'react';
import { Settings2, X, Github, ExternalLink } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { ProjectInterface } from '@/lib/definitions';

const DeleteProject = ({ id }: { id: string }) => {
  const deleteProjectWithId = deleteProject.bind(null, id);

  return (
    <form action={deleteProjectWithId} className="leading-none">
      <button>
        <X className="text-red-500 hover:scale-110" />
      </button>
    </form>
  );
};

const Projects = async () => {
  const projects = (await getProjects()) as ProjectInterface[];

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="adminTitle">Project List</h3>
        <Link href="/admin/projects/create" className="btn px-3">
          Add Project
        </Link>
      </div>
      <div className="tabletS:hidden">
        {projects &&
          projects.map(project => (
            <div key={project._id as Key} className="bg-background-lighter rounder-full my-4 px-2 py-3">
              {/** header */}
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <div className="flex gap-1">
                  <Link href={`/admin/projects/${project._id}/edit`}>
                    <Settings2 className="hover:scale-110" />
                  </Link>
                  <DeleteProject id={project._id.toString()} />
                </div>
              </div>
              {/** body */}
              <div className="my-2">{project.description}</div>
              {/** footer */}
              <div className="flex justify-between">
                <div className="flex gap-1 mt-1 flex-wrap">
                  {project.techs.map((tech: { _id: Key | null | undefined; name: string }) => (
                    <Badge key={tech._id} name={tech.name} />
                  ))}
                </div>
                <div className="flex gap-1">
                  {project.urls.map((url: { name: Key | null | undefined; url: string | undefined }) => (
                    <span key={url.name}>
                      {url.name === 'github' ? (
                        <a href={url.url} target="_blank" rel="noopener noreferrer">
                          <Github className="hover:scale-110" />
                        </a>
                      ) : (
                        <a href={url.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="hover:scale-110" />
                        </a>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
      {/** table for bigger screens */}
      <div className="hidden mt-4 tabletS:block">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="text-left w-28 min-w-28 pl-4">Title</th>
              <th className="w-full">Description</th>
              <th className="hidden desktopS:table-cell w-44 min-w-44">Tech</th>
              <th className="w-16 min-w-16">Url</th>
              <th className="w-16 min-w-16">Edit</th>
            </tr>
          </thead>
          <tbody>
            {projects &&
              projects.map(project => (
                <tr key={project._id as Key} className="align-middle h-14 hover:bg-background-lighter rounded-full">
                  <td className="pl-4">
                    <div>
                      <h3>{project.title}</h3>
                    </div>
                  </td>
                  <td className="px-4">
                    <div>{project.description}</div>
                    <div className="desktopS:hidden">
                      {project.techs.map((tech: { _id: Key | null | undefined; name: string }) => (
                        <Badge key={tech._id} name={tech.name} />
                      ))}
                    </div>
                  </td>
                  <td className="hidden desktopS:table-cell w-44">
                    {project.techs.map((tech: { _id: Key | null | undefined; name: string }) => (
                      <Badge key={tech._id} name={tech.name} />
                    ))}
                  </td>
                  <td className="text-center">
                    {project.urls.map((url: { name: Key | null | undefined; url: string | undefined }) => (
                      <span key={url.name}>
                        {url.name === 'github' ? (
                          <a href={url.url} target="_blank" rel="noopener noreferrer">
                            <Github size={24} className="hover:scale-110 inline-block leading-none" />
                          </a>
                        ) : (
                          <a href={url.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={24} className="hover:scale-110 inline-block leading-none" />
                          </a>
                        )}
                      </span>
                    ))}
                  </td>
                  <td className="text-center">
                    <div className="flex justify-center items-center">
                      <Link href={`/admin/projects/${project._id}/edit`} className="inline-block align-middle">
                        <Settings2 className="hover:scale-110" />
                      </Link>

                      <DeleteProject id={project._id.toString()} />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
