import Header from '@/components/Header';
import StepFooter from '@/components/Tutorial/StepFooter';
import type React from 'react';
import { type ReactNode, useRef } from 'react';

type RenderChildren = (scrollRef: React.RefObject<HTMLDivElement | null>) => ReactNode;

interface Props {
  children?: RenderChildren;
}

const Layout = ({ children }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex h-[100%] w-full flex-col overflow-hidden bg-gradient-to-b from-purple-600 to-indigo-900">
      <Header id={'HowTo'} />
      <section
        className="flex min-h-[100%] grow snap-y snap-mandatory overflow-y-auto overflow-x-hidden scrollbar scrollbar-track-purple-500 scrollbar-thumb-indigo-900"
        ref={scrollRef}
      >
        {children && children(scrollRef)}
      </section>
      <StepFooter className="fixed bottom-0 left-0 block w-full p-6" />
    </main>
  );
};

export default Layout;
