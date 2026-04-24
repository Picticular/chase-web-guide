import Frame from '@/components/Frame';
import StepImage from '@/components/Tutorial/StepImage';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import type React from 'react';

import arrow from '../../public/phone-step-05-arrow.png';
import message from '../../public/phone-step-05-message.png';

interface Props {
  scrollRef?: React.RefObject<HTMLDivElement | null>;
}

const Step06 = ({ scrollRef: ref }: Props) => {
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
              Follow
            </motion.div>{' '}
            Cast &amp;
            <span className="inline lg:block"> </span>
            Crew To Always
            <span className="inline lg:block"> </span>Be In The Know...
          </div>
          <div className="mb-0 text-center text-xs lg:text-2xl">
            Receive notifications when your fav
            <span className="inline lg:block"> </span>
            film personalities come out with
            <span className="inline lg:block"> </span>
            new movies or even when titles change streamers!
          </div>
        </motion.div>
        <div className="relative h-[65vh] w-auto pb-6 lg:h-[100%] lg:pb-0">
          <StepImage
            imgSrc={'/phone-step-05.png'}
            altText={'Step 6 follow cast and crew phone image'}
            direction={'right'}
            className={'h-[100%] w-auto'}
            isAbsolute={false}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 h-auto w-[22vh] origin-center"
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              scale: shouldReduceMotion ? 1 : 0,
              translateY: '-130%',
              translateX: '-50%',
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              translateY: '-130%',
              translateX: '-50%',
            }}
            transition={{
              type: 'spring',
              stiffness: 75,
              duration: 0.75,
              delay: 1,
            }}
            viewport={{
              once: true,
              amount: 0.5,
              root: ref,
            }}
          >
            <Image src={message} alt="Message bubble" className="h-auto w-full" />
          </motion.div>
          <motion.div
            className="absolute top-0 left-1/2 h-auto w-[3vh] origin-center"
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              scale: shouldReduceMotion ? 1 : 0.5,
              translateY: '-20%',
              translateX: '260%',
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              translateY: '-20%',
              translateX: '260%',
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              duration: 0.5,
              delay: 0.5,
            }}
            viewport={{
              once: true,
              amount: 0.5,
              root: ref,
            }}
          >
            <Image src={arrow} alt="Arrow" className="h-auto w-full" />
          </motion.div>
        </div>
      </div>
    </Frame>
  );
};

export default Step06;
