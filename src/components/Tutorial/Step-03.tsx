import Frame from '@/components/Frame';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import type React from 'react';

interface Props {
  scrollRef?: React.RefObject<HTMLDivElement | null>;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Step03 = ({ scrollRef: ref }: Props) => {
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
          Get The
          <br />
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
            Best Seat
          </motion.div>
          <br />
          In The House
        </motion.div>

        <motion.div
          className={'flex h-[65vh] w-auto grow items-center justify-center'}
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            x: shouldReduceMotion ? 0 : '-100%',
            translateY: '0%',
          }}
          whileInView={{
            opacity: 1,
            x: '0',
            translateX: '0',
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
        >
          <div className="relative h-[100%] w-auto">
            <Image
              src={`${basePath}/img-phone-frame.png`}
              alt={'Step 3, seat selection phone screen image'}
              width={427}
              height={875}
              className={'h-[100%] w-auto'}
            />
            <div className="absolute top-[1%] left-[2%] -z-10 h-[98%] w-[96%] overflow-hidden rounded-[2.5rem] bg-white">
              {/* Frame 1 */}
              <motion.div
                className="absolute top-0 left-0 h-full w-full"
                initial={{
                  x: 0,
                }}
                whileInView={{
                  x: '-100%',
                }}
                transition={{
                  type: 'tween',
                  ease: 'easeIn',
                  duration: 0.5,
                  delay: 5,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                  root: ref,
                }}
              >
                <motion.div
                  className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black"
                  initial={{
                    opacity: 1,
                  }}
                  whileInView={{
                    opacity: 0.75,
                  }}
                  transition={{
                    type: 'tween',
                    ease: 'easeIn',
                    duration: 0.5,
                    delay: 2,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                    root: ref,
                  }}
                >
                  <Image
                    src={`${basePath}/step-03-frame-01.jpeg`}
                    alt={'Step 3 phone image'}
                    width={427}
                    height={875}
                    className={'h-[95%] w-auto'}
                    priority
                  />
                </motion.div>
                <motion.div
                  className="absolute left-[10%] bottom-0 flex h-[106px] w-[80%] flex-col items-center justify-center rounded-[0.75rem] bg-black text-center text-sm text-white"
                  initial={{
                    opacity: shouldReduceMotion ? 1 : 0,
                    y: shouldReduceMotion ? -150 : 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: -150,
                  }}
                  transition={{
                    type: 'tween',
                    ease: 'easeIn',
                    duration: 0.5,
                    delay: 2,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                    root: ref,
                  }}
                >
                  <img
                    src={`${basePath}/step-03-frame-01-spinner.gif`}
                    width="24"
                    height="24"
                    className="mb-2"
                    alt="loading spinner"
                  />
                  <span>Selecting the best seat in the house nearest you</span>
                </motion.div>
              </motion.div>

              {/* Frame 2 */}
              <motion.div
                className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black"
                initial={{
                  x: '100%',
                }}
                whileInView={{
                  x: '0%',
                }}
                transition={{
                  type: 'tween',
                  ease: 'easeIn',
                  duration: 0.5,
                  delay: 5,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                  root: ref,
                }}
              >
                <Image
                  src={`${basePath}/step-03-frame-02.jpg`}
                  alt={'Step 3, Frame 2 phone screen image'}
                  width={427}
                  height={875}
                  className={'h-[95%] w-auto'}
                  priority
                />
              </motion.div>

              {/* Frame 3 */}
              <motion.div
                className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  type: 'tween',
                  ease: 'easeIn',
                  duration: 0.1,
                  delay: 6.5,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                  root: ref,
                }}
              >
                <Image
                  src={`${basePath}/step-03-frame-02.1.jpg`}
                  alt={'Step 3, Frame 2.1 phone screen image'}
                  width={427}
                  height={875}
                  className={'h-[95%] w-auto'}
                  priority
                />
              </motion.div>

              {/* Frame 4 */}
              <motion.div
                className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  type: 'tween',
                  ease: 'easeIn',
                  duration: 0.1,
                  delay: 8.5,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                  root: ref,
                }}
              >
                <Image
                  src={`${basePath}/step-03-frame-02.2.jpg`}
                  alt={'Step 3, Frame 2.2 phone screen image'}
                  width={427}
                  height={875}
                  className={'h-[95%] w-auto'}
                  priority
                />
              </motion.div>

              {/* Frame 5 */}
              <motion.div
                className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  type: 'tween',
                  ease: 'easeIn',
                  duration: 0.1,
                  delay: 10,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                  root: ref,
                }}
              >
                <Image
                  src={`${basePath}/step-03-frame-02.3.jpg`}
                  alt={'Step 3, Frame 2.3 phone screen image'}
                  width={427}
                  height={875}
                  className={'h-[95%] w-auto'}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Frame>
  );
};

export default Step03;
