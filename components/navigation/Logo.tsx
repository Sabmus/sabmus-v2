import Link from 'next/link';

const Logo = () => {
  return (
    <a href="/" className="relative z-10 flex items-center text-xl icon text-special_1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="24"
        viewBox="0 0 12 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
      </svg>
      S
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="24"
        viewBox="12 0 12 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
      </svg>
    </a>
  );
};

export default Logo;
