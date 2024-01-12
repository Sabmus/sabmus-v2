import LoginForm from '@/components/LoginForm';

const Login = () => {
  return (
    <div className="flex flex-col items-center w-fit mt-48 bg-background-lighter mx-auto p-10 rounded-md">
      <h1>Welcome!</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
