const Badge = ({ name }: { name: string }) => {
  return (
    <span className="font-mono inline-flex items-center rounded-full px-2 text-sm bg-special_1 text-background font-semibold w-fit">
      {name}
    </span>
  );
};

export default Badge;
