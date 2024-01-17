const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-5/6 mx-auto mt-24">{children}</div>;
};

export default ProtectedLayout;
