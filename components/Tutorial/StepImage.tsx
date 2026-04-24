import { uniqueClasses } from '@/hooks/utils';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import type React from 'react';

interface StepImage1Props {
  imgSrc: string;
  altText: string;
  direction: string;
  minWidth?: string;
  className?: string;
  scrollRef?: React.RefObject<HTMLDivElement | null>;
  isAbsolute?: boolean;
  onAnimationComplete?: () => void;
}

const StepImage1 = ({
  imgSrc,
  altText,
  direction,
  minWidth,
  className,
  scrollRef: ref,
  isAbsolute,
  onAnimationComplete,
}: StepImage1Props) => {
  const shouldReduceMotion = useReducedMotion();
  const containerClasses = isAbsolute
    ? `absolute top-1/2 left-1/2 h-3/5 lg:h-4/5 inline-block w-auto ${minWidth ? minWidth : ''} flex items-center justify-center`
    : 'flex grow items-center justify-center';
  const classNames = uniqueClasses(`${containerClasses}${className ? ` ${className}` : ''}`);

  return (
    <motion.div
      className={classNames}
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        x: shouldReduceMotion ? 0 : direction === 'left' ? '-100%' : '100%',
        translateY: isAbsolute ? '-50%' : '0%',
      }}
      whileInView={{
        opacity: 1,
        x: '0',
        translateX: isAbsolute ? '-50%' : '0',
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        x: {
          type: 'spring',
        },
        opacity: {
          duration: 0.5,
        },
      }}
      viewport={{
        once: true,
        margin: '0px 100px -50px 0px',
        root: ref,
      }}
      onAnimationComplete={onAnimationComplete}
    >
      <Image src={imgSrc} alt={altText} width={427} height={875} className={'h-[100%] w-auto'} />
    </motion.div>
  );
};

export default StepImage1;
