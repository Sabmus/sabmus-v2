import * as React from 'react';

type DivProps = React.HTMLProps<HTMLDivElement>;

const GlowWrapper = React.forwardRef<HTMLDivElement, DivProps>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={`group relative ${className}`} {...props}>
      <div className="absolute -inset-2 glowGradient blur opacity-75 transition duration-700 group-hover:opacity-100 group-hover:duration-200"></div>
      {children}
    </div>
  );
});
GlowWrapper.displayName = 'GlowWrapper';

export default GlowWrapper;
