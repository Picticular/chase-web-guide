import Frame from '@/components/Frame';
import StepImage from '@/components/Tutorial/StepImage';
import { motion, useReducedMotion } from 'framer-motion';
import type React from 'react';
import { useState } from 'react';
import Confetti from 'react-confetti';

interface Props {
  scrollRef?: React.RefObject<HTMLDivElement | null>;
}

const Step02 = ({ scrollRef: ref }: Props) => {
  const shouldReduceMotion = useReducedMotion();
  const [isInView, setIsInView] = useState(false);

  const onComplete = () => {
    setIsInView(true);
  };

  const confettiConfig = {
    angle: 90,
    spread: 360,
    duration: 3000,
    stagger: 3,
    perspective: '500px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
    run: isInView,
  };

  return (
    <Frame>
      {isInView && <Confetti {...confettiConfig} />}
      <div className="relative flex h-[100%] w-full flex-col items-center justify-center pt-3 lg:pt-0">
        <motion.div
          className="mb-2 w-[100%] px-0 text-center text-3xl font-bold uppercase leading-none text-white md:text-4xl lg:mb-[6rem] lg:px-20 lg:text-[4vw] lg:leading-[0.8]"
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            y: shouldReduceMotion ? 0 : 150,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            duration: 0.75,
            delay: 0.75,
          }}
          viewport={{
            once: true,
            amount: 0.5,
            root: ref,
          }}
        >
          <motion.div
            className="inline-block text-purple-500"
            initial={{
              opacity: shouldReduceMotion ? 0 : 1,
              scale: shouldReduceMotion ? 1 : 4,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              duration: 1,
              delay: 0.85,
            }}
            viewport={{
              once: true,
              amount: 0.5,
              root: ref,
            }}
          >
            Match
          </motion.div>{' '}
          With
          <br />
          Friends Over
          <br />
          Movie Night!
        </motion.div>
        <StepImage
          imgSrc={'/phone-step-02.png'}
          altText={'Step 2 phone image'}
          direction={'right'}
          className={'h-[65vh] w-auto pb-6 lg:h-[100%] lg:pb-0'}
          isAbsolute={false}
          onAnimationComplete={onComplete}
        />
      </div>
    </Frame>
  );
};

export default Step02;
