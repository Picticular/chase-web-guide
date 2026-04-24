import type React from 'react';
import type { ReactNode } from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

const Frame = ({ children, ...props }: Props) => {
  return (
    <section className="relative min-h-screen w-full snap-start snap-always px-5 py-16" {...props}>
      {children}
    </section>
  );
};

export default Frame;
