import { ForwardRefComponent, HTMLMotionProps, motion, useMotionValue, useVelocity } from "framer-motion";
import { useEffect, useState } from "react";

// React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function ProjectButton(props: {
  ref?: React.RefObject<HTMLButtonElement>,
  dragConstraints: React.MutableRefObject<null>,
  textColor: 'black' | 'whitesmoke',
  backgroundColorAngle: number,
  title: string,
  subtitle: string,
  date: string
  getVelocity?: () => void;
} & ForwardRefComponent<HTMLButtonElement, HTMLMotionProps<"button">>) {

  const [rotationDirection, setrotationDirection] = useState<(-1 | 1)>(Math.random() - 0.5 >= 0 ? 1 : -1);

  const [grabbingTimeOut, setgrabbingTimeOut] = useState<NodeJS.Timeout | null>(null);
  const [isGrabbing, setisGrabbing] = useState<boolean>(false);

  function handleGrabbing() {

    clearTimeout(grabbingTimeOut as NodeJS.Timeout);

    let tempGrabbingTimeOut: NodeJS.Timeout;

    setisGrabbing(true);

    tempGrabbingTimeOut = setTimeout(function () {
      setisGrabbing(false);
    }, 1000);

    setgrabbingTimeOut(tempGrabbingTimeOut);

  }

  return (

    <motion.button
      {...props}
      style={{ backgroundColor: `hsl(${props.backgroundColorAngle % 360},80%,50%)`, cursor: isGrabbing ? 'grabbing' : 'grab' }}
      className='absolute flex flex-col justify-around items-center w-44 h-28 p-2 rounded-lg shadow-2xl'
      type='button'
      drag
      dragElastic={0.2}
      dragConstraints={props.dragConstraints}
      onDrag={(e) => handleGrabbing()}
      whileDrag={{ scale: 1.2 }}
      whileHover={{ rotate: 5 * rotationDirection }}>

      <h4 style={{ color: props.textColor }} className="text-lg font-bold">{props.title}</h4>

      <h5 style={{ color: props.textColor }} className="text-base font-medium">{props.subtitle}</h5>

      <h6 style={{ color: props.textColor }} className="text-sm font-thin">{props.date}</h6>

    </motion.button>

  )

}