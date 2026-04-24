import Step01 from '@/components/Tutorial/Step-01';
import Step02 from '@/components/Tutorial/Step-02';
import Step03 from '@/components/Tutorial/Step-03';
import Step04 from '@/components/Tutorial/Step-04';
import Step05 from '@/components/Tutorial/Step-05';
import Step06 from '@/components/Tutorial/Step-06';
import Step07 from '@/components/Tutorial/Step-07';
import type React from 'react';

interface Props {
  scrollRef?: React.RefObject<HTMLDivElement | null>;
}

const Steps = ({ scrollRef }: Props) => {
  return (
    <div className="relative block h-[100%] w-full">
      <Step01 scrollRef={scrollRef} />
      <Step02 scrollRef={scrollRef} />
      <Step03 scrollRef={scrollRef} />
      <Step04 scrollRef={scrollRef} />
      <Step05 scrollRef={scrollRef} />
      <Step06 scrollRef={scrollRef} />
      <Step07 scrollRef={scrollRef} />
    </div>
  );
};

export default Steps;
