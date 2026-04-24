import Frame from '@/components/Frame';
import StepImage from '@/components/Tutorial/StepImage';
import { motion, useReducedMotion } from 'framer-motion';
import type React from 'react';

interface Props {
  scrollRef?: React.RefObject<HTMLDivElement | null>;
}

const Step07 = ({ scrollRef: ref }: Props) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Frame>
      <div className="relative flex h-[100%] w-full flex-col items-center justify-center pt-3 lg:pt-0">
        <motion.div
          className="mb-2 w-[100%] px-0 text-center text-3xl font-bold uppercase leading-none text-white md:text-4xl lg:mb-5 lg:px-20 lg:text-[4vw] lg:leading-[0.8]"
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
            duration: 0.5,
          }}
          viewport={{
            once: true,
            amount: 0.5,
            root: ref,
          }}
        >
          <div className="mb-1 text-2xl font-bold uppercase leading-none lg:mb-0 lg:text-[4vw] lg:leading-[0.8]">
            <motion.div
              className="inline-block text-purple-500"
              initial={{
                opacity: shouldReduceMotion ? 1 : 0,
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
              }}
              viewport={{
                once: true,
                amount: 0.5,
                root: ref,
              }}
            >
              Win
            </motion.div>{' '}
            Free Swag,
            <br />
            Just<span className="inline lg:block"> </span>For Swiping!
          </div>
          <div className="mb-0 text-center text-xs lg:mb-5 lg:text-2xl">
            Win Free Movie Tickets, Giftboxes, and
            <div className="inline lg:block"></div>
            Experiences like our <em>At-Home Movie Premieres</em>
            <span className="inline lg:block"> </span>just for adding to your lists!
          </div>
        </motion.div>
        <StepImage
          imgSrc={'/phone-step-06.png'}
          altText={'Step 7 win free swag phone image'}
          direction={'left'}
          className={'h-[65vh] w-auto pb-6 lg:h-[100%] lg:pb-0'}
          isAbsolute={false}
        />
      </div>
    </Frame>
  );
};

export default Step07;
