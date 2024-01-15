const Footer = () => {
  return (
    <footer className="flex justify-center py-3">
      <p>
        Made with{' '}
        <a href="https://nextjs.org/" target="_blanck" className="underAnimated" rel="noopener noreferrer">
          NextJS
        </a>
        {', '}
        <a href="https://www.mongodb.com/" target="_blanck" className="underAnimated" rel="noopener noreferrer">
          MongoDB
        </a>
        {' and '}
        <a href="https://tailwindcss.com/" target="_blanck" className="underAnimated" rel="noopener noreferrer">
          TailwindCss
        </a>
      </p>
    </footer>
  );
};

export default Footer;
