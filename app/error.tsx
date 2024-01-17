'use client';

import Link from 'next/link';

const notFound = () => {
  return (
    <div className="w-5/6 mt-44 mx-auto">
      <div className="flex flex-col gap-10 justify-center items-center">
        <p>Something went wrong!</p>
        <Link href="/" className="underAnimated">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default notFound;
