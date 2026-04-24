import Frame from '@/components/Frame';
import StepIcons from '@/components/Tutorial/StepIcons';
import StepImage from '@/components/Tutorial/StepImage';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import type React from 'react';

interface Props {
  scrollRef?: React.RefObject<HTMLDivElement | null>;
}

const Step01 = ({ scrollRef: ref }: Props) => {
  const shouldReduceMotion = useReducedMotion();
  const winSize = useWindowDimensions();
  const isMobile = winSize.width < 768;
  const icons = [
    {
      src: '/icon-amc-logo.svg',
      alt: 'AMC icon',
      top: 'top-[8vh]',
      left: 'left-0',
    },
    {
      src: '/icon-netflix-logo.svg',
      alt: 'Netflix icon',
      top: 'top-[8vh]',
      left: 'left-[12vh]',
    },
    {
      src: '/icon-hbo-max-logo.svg',
      alt: 'HBO Max icon',
      top: 'top-[8vh]',
      left: 'left-[24vh]',
    },
    {
      src: '/icon-apple-tv-logo.svg',
      alt: 'Apple TV icon',
      top: 'top-[20vh]',
      left: 'left-[5vh]',
    },
    {
      src: '/icon-prime-video-logo.svg',
      alt: 'Prime Video icon',
      top: 'top-[20vh]',
      left: 'left-[17vh]',
    },
    {
      src: '/icon-laemmle-logo.svg',
      alt: 'Laemmle icon',
      top: 'top-[20vh]',
      left: 'left-[29vh]',
    },
    {
      src: '/icon-disney-plus-logo.svg',
      alt: 'Disney Plus icon',
      top: 'top-[32vh]',
      left: 'left-[9vh]',
    },
    {
      src: '/icon-redbox-logo.svg',
      alt: 'Redbox icon',
      top: 'top-[32vh]',
      left: 'left-[21vh]',
    },
    {
      src: '/icon-hulu-logo.svg',
      alt: 'Hulu icon',
      top: 'top-[32vh]',
      left: 'left-[33vh]',
    },
    {
      src: '/icon-cinemark-logo.svg',
      alt: 'Cinemark icon',
      top: 'top-[44vh]',
      left: 'left-[17vh]',
    },
    {
      src: '/icon-vudu-logo.svg',
      alt: 'Vudu icon',
      top: 'top-[44vh]',
      left: 'left-[29vh]',
    },
    {
      src: '/icon-plus-more.svg',
      alt: 'Plus more icon',
      top: 'top-[56vh]',
      left: 'left-[24vh]',
    },
  ];

  return (
    <Frame>
      <StepImage
        imgSrc={'/phone-angle.png'}
        altText={'Generic mobile phone'}
        direction={'left'}
        minWidth={'min-w-[69.8781vh]'}
        isAbsolute={true}
        scrollRef={ref}
      />
      <motion.div
        className={`absolute ${isMobile ? 'top-[11%]' : 'top-[28%]'} left-0 flex h-auto w-[100%] items-center justify-center px-10 lg:w-3/5 lg:justify-start xl:w-4/5`}
        initial={{
          x: shouldReduceMotion ? 0 : -200,
          opacity: shouldReduceMotion ? 1 : 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          duration: 0.5,
          stiffness: 200,
        }}
        viewport={{
          once: true,
          root: ref,
        }}
      >
        <Image
          src={'/picticular-logo-text-all-white.svg'}
          width={'1000'}
          height={'1000'}
          alt={'Picticular logo'}
          className={'h-[80%] w-[80vw] lg:w-[40vw]'}
        />
      </motion.div>

      <motion.div
        className={`absolute left-0 ${isMobile ? 'top-[18%]' : 'top-[35%]'} flex w-[100%] items-center justify-center px-10 text-3xl font-bold uppercase leading-none text-white md:text-[4vw] lg:left-0 lg:w-3/5 lg:justify-start lg:text-[2.75vw] xl:w-4/5`}
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
          root: ref,
        }}
      >
        <span>
          Where <span className="text-purple-500">Your</span> Movies Live{' '}
        </span>
        <Image
          src={'/picicular-logo-icon.svg'}
          width={'100'}
          height={'100'}
          alt={'Picticular logo'}
          className={'ml-0 h-[20vw] w-[20vw] md:h-[3.75vw] md:w-[3.75vw] lg:ml-2'}
        />
      </motion.div>
      <motion.div
        className="absolute left-0 top-[55%] w-auto px-10 text-center text-2xl font-bold uppercase leading-none text-white drop-shadow-md md:text-4xl lg:w-2/5 lg:text-left lg:text-[3vw] lg:leading-[0.9]"
        initial={{
          opacity: shouldReduceMotion ? 1 : 0,
          y: shouldReduceMotion ? 0 : -150,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          duration: 0.75,
          delay: 1,
        }}
        viewport={{
          once: true,
          root: ref,
        }}
      >
        Earn Chase Rewards:{' '}
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
            delay: 1.25,
          }}
          viewport={{
            once: true,
            margin: '0px 100px -50px 0px',
            root: ref,
          }}
        >
          {' '}
          Discover, Dream, Redeem
        </motion.div>{' '}
        for Date Night, Dinner or Travel
      </motion.div>
      <div className="absolute top-10 right-10 hidden h-[100%] w-2/3 lg:block lg:w-1/2 xl:w-2/5">
        <div className="relative h-[100%] w-full">
          {icons.map((icon, index) => (
            <StepIcons
              key={`${icon.src}-${index}`}
              iconSrc={icon.src}
              iconAlt={icon.alt}
              iconWidth={128}
              iconHeight={128}
              iconTop={icon.top}
              iconLeft={icon.left}
              index={index}
              scrollRef={ref}
            />
          ))}
        </div>
      </div>
    </Frame>
  );
};

export default Step01;
