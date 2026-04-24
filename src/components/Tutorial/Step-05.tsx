import Frame from '@/components/Frame';
import StepImage from '@/components/Tutorial/StepImage';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import type React from 'react';

import dmOrText from '../../../public/phone-step-04-dm-or-text.png';
import trailers from '../../../public/phone-step-04-trailers.png';
import weGotEm from '../../../public/phone-step-04-we-got-em.png';

interface Props {
  scrollRef?: React.RefObject<HTMLDivElement | null>;
}

const Step05 = ({ scrollRef: ref }: Props) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Frame>
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
          }}
        >
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
              delay: 0.85,
            }}
            viewport={{
              once: true,
              amount: 0.5,
              root: ref,
            }}
          >
            Watch
          </motion.div>{' '}
          Titles With
          <span className="inline lg:block"> </span>A Click &amp;{' '}
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
              delay: 1,
            }}
            viewport={{
              once: true,
              amount: 0.5,
              root: ref,
            }}
          >
            Share
          </motion.div>
          <span className="inline lg:block"> </span>Favs with Friends
        </motion.div>
        <div className="relative h-[65vh] w-auto pb-6 lg:h-[100%] lg:pb-0">
          <StepImage
            imgSrc={'/phone-step-04.png'}
            altText={'Step 5 watch and share phone image'}
            direction={'left'}
            className={'h-[100%] w-auto'}
            isAbsolute={false}
          />
          <motion.div
            className="absolute top-0 left-0 h-auto w-4/5"
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              scale: shouldReduceMotion ? 1 : 0.5,
              translateY: shouldReduceMotion ? '150%' : '-115%',
              translateX: shouldReduceMotion ? '-43%' : '-30%',
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              translateY: '150%',
              translateX: '-43%',
            }}
            transition={{
              type: 'spring',
              stiffness: 150,
              duration: 0.5,
              delay: 1.25,
            }}
            viewport={{
              once: true,
              amount: 0.5,
              root: ref,
            }}
          >
            <Image src={trailers} alt="Trailers" className="h-auto w-full" />
          </motion.div>
          <motion.div
            className="absolute top-0 right-0 h-auto w-4/5"
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              scale: shouldReduceMotion ? 1 : 0.5,
              translateY: shouldReduceMotion ? '144%' : '-41.5%',
              translateX: shouldReduceMotion ? '30%' : '6.5%',
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              translateY: '144%',
              translateX: '30%',
            }}
            transition={{
              type: 'spring',
              stiffness: 150,
              duration: 0.5,
              delay: 1.75,
            }}
            viewport={{
              once: true,
              amount: 0.5,
              root: ref,
            }}
          >
            <Image src={dmOrText} alt="DM or Text" className="h-auto w-full" />
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 h-auto w-4/5"
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              scale: shouldReduceMotion ? 1 : 0.5,
              translateY: shouldReduceMotion ? '250%' : '-41.5%',
              translateX: shouldReduceMotion ? '-32.5%' : '6.5%',
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              translateY: '250%',
              translateX: '-32.5%',
            }}
            transition={{
              type: 'spring',
              stiffness: 150,
              duration: 0.5,
              delay: 2,
            }}
            viewport={{
              once: true,
              amount: 0.5,
              root: ref,
            }}
          >
            <Image src={weGotEm} alt="We got em!" className="h-auto w-full" />
          </motion.div>
        </div>
      </div>
    </Frame>
  );
};

export default Step05;
