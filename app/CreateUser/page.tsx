import UserForm from '@/components/UserForm';

const CreateUser = () => {
  return (
    <div>
      <h1 className="text-blue-500">Only Admin</h1>
      <UserForm />
    </div>
  );
};

export default CreateUser;
