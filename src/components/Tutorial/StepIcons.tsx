import useWindowDimensions from '@/hooks/useWindowDimensions';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type React from 'react';

interface StepIconsProps {
  iconSrc: string;
  iconAlt: string;
  iconWidth?: number;
  iconHeight?: number;
  iconTop?: string;
  iconRight?: string;
  iconLeft?: string;
  iconBottom?: string;
  scrollRef?: React.RefObject<HTMLDivElement | null>;
  index: number;
}

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const StepIcons = ({
  iconSrc,
  iconAlt,
  iconWidth,
  iconHeight,
  iconTop,
  iconRight,
  iconLeft,
  iconBottom,
  scrollRef: ref,
  index,
}: StepIconsProps) => {
  const winSize = useWindowDimensions();
  const isMobile = winSize.width < 768;

  return (
    <>
      {!isMobile && (
        <motion.div
          className={`absolute${iconTop ? ' ' + iconTop : ''}${iconRight ? ' ' + iconRight : ''}${iconLeft ? ' ' + iconLeft : ''}${iconBottom ? ' ' + iconBottom : ''} w-[10vh]`}
          initial={{
            opacity: 0,
            x: getRandomInt(-250, 250),
            y: getRandomInt(-250, 250),
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            duration: 0.5,
            delay: 1 + index * 0.15,
          }}
          viewport={{
            once: true,
            amount: 0.5,
            root: ref,
          }}
        >
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={iconWidth || 128}
            height={iconHeight || 128}
            className={'h-[100%] w-auto'}
          />
        </motion.div>
      )}
    </>
  );
};

export default StepIcons;
