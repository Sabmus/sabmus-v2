import * as React from 'react';

type DivProps = React.HTMLProps<HTMLDivElement>;

const GlowWrapper = React.forwardRef<HTMLDivElement, DivProps>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 blur opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
      {children}
    </div>
  );
});
GlowWrapper.displayName = 'GlowWrapper';

export default GlowWrapper;
