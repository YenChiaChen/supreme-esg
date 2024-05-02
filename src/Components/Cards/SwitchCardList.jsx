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
    <main ref={container} >
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <SwitchCard key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
  )
}