const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-background w-5/6 mx-auto mt-24 h-[75vh]">{children}</div>;
};

export default ProtectedLayout;
