import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectButton(props: {
  ref?: React.RefObject<HTMLButtonElement>,
  dragConstraints: React.MutableRefObject<null>,
  textColor: 'black' | 'whitesmoke',
  backgroundColorAngle: number,
  title: string,
  subtitle: string,
  date: string
}) {

  const [rotationDirection, setrotationDirection] = useState<(-1 | 1)>(Math.random() - 0.5 >= 0 ? 1 : -1);

  return (

    <motion.button
      style={{ backgroundColor: `hsl(${props.backgroundColorAngle % 360},80%,50%)` }}
      className='absolute flex flex-col justify-around items-center w-44 h-28 p-2 !cursor-grab active:cursor-grabbing rounded-lg shadow-2xl'
      type='button'
      drag
      dragElastic={0.2}
      dragConstraints={props.dragConstraints}
      whileDrag={{ scale: 1.2 }}
      whileHover={{ rotate: 5 * rotationDirection }}>

      <h4 style={{ color: props.textColor }} className="text-lg font-bold">{props.title}</h4>

      <h5 style={{ color: props.textColor }} className="text-base font-medium">{props.subtitle}</h5>

      <h6 style={{ color: props.textColor }} className="text-sm font-thin">{props.date}</h6>

    </motion.button>

  )

}