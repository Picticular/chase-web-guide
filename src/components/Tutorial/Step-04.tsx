import Frame from '@/components/Frame';
import StepImage from '@/components/Tutorial/StepImage';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import type React from 'react';

import lit from '../../../public/phone-step-03-lit.png';
import minus from '../../../public/phone-step-03-minus.png';
import plus from '../../../public/phone-step-03-plus.png';
import poop from '../../../public/phone-step-03-poop-shoot.png';

interface Props {
  scrollRef?: React.RefObject<HTMLDivElement | null>;
}

const Step04 = ({ scrollRef: ref }: Props) => {
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
            Swipe
          </motion.div>{' '}
          Yay or Nay
          <br />
          On New &amp; Old
          <br />
          Titles...
        </motion.div>
        <div className="relative h-[65vh] w-auto pb-6 lg:h-[100%] lg:pb-0">
          <StepImage
            imgSrc={'/phone-step-03.png'}
            altText={'Step 4 swipe phone image'}
            direction={'right'}
            className={'h-[100%] w-auto'}
            isAbsolute={false}
          />
          <motion.div
            className="absolute top-0 left-0 h-auto w-2/3"
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              scale: shouldReduceMotion ? 1 : 0.5,
              translateY: '-12%',
              translateX: '14%',
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              translateY: '-30.5%',
              translateX: '1.75%',
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
            <Image src={lit} alt="lit" className="h-auto w-full" />
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 h-auto w-2/3"
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              scale: shouldReduceMotion ? 1 : 0.5,
              translateY: shouldReduceMotion ? '196%' : '-58%',
              translateX: shouldReduceMotion ? '-26.5%' : '-27.75%',
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              translateY: '196%',
              translateX: '-26.5%',
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
            <Image src={minus} alt="minus" className="h-auto w-full" />
          </motion.div>
          <motion.div
            className="absolute top-0 right-0 h-auto w-2/3"
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              scale: shouldReduceMotion ? 1 : 0.5,
              translateY: shouldReduceMotion ? '126%' : '-92.75%',
              translateX: shouldReduceMotion ? '30.25%' : '30.85%',
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              translateY: '126%',
              translateX: '30.25%',
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
            <Image src={plus} alt="plus" className="h-auto w-full" />
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 h-auto w-2/3"
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              scale: shouldReduceMotion ? 1 : 0.5,
              translateY: shouldReduceMotion ? '340%' : '-41.5%',
              translateX: shouldReduceMotion ? '-13.75%' : '6.5%',
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              translateY: '340%',
              translateX: '-13.75%',
            }}
            transition={{
              type: 'spring',
              duration: 0.5,
              delay: 2.25,
            }}
            viewport={{
              once: true,
              amount: 0.5,
              root: ref,
            }}
          >
            <Image src={poop} alt="poop" className="h-auto w-full" />
          </motion.div>
        </div>
      </div>
    </Frame>
  );
};

export default Step04;
