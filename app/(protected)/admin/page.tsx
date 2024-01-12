import Link from 'next/link';

const AdminPanel = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <div className="flex flex-col">
        <Link href="/admin/projects">Projects</Link>
        <Link href="/admin/experience">Experience</Link>
      </div>
    </div>
  );
};

export default AdminPanel;
