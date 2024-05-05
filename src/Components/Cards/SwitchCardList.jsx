'use client';
import { projects } from '../../data/achievements';
import SwitchCard from './SwitchCard';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';

export default function SwitchCardList() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <main ref={container} className='relative' >
      
      <p className=" font-semibold  text-5xl  text-[#555555] tracking-[6px] mt-36 sticky top-[15%] text-center text-white">
            永續成果
          </p>
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <SwitchCard key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
  )
}