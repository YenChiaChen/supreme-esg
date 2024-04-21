import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import urlBG from '../../Assets/img/building.png'
import building from '../../Assets/img/buildingonly.png'
import tree01 from '../../Assets/img/tree1.png'
import tree02 from '../../Assets/img/tree2.png'

import SmoothScroll from './SmoothScroll';

export default function ParaTesting() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end end"]
    });


  const bgY = useTransform(scrollYProgress, [0, 1.0], ['0px', '-100px'] )
  const physics = { damping: 15, mass: 0.9, stiffness: 50 }
  const spring = useSpring(bgY, physics) 
  
  const treeY = useTransform(scrollYProgress, [0, 1.0], ['500px', '0px'] )
  const treeYSpring = useSpring(treeY, physics) 
  
  const tree2Y = useTransform(scrollYProgress, [0, 1.0], ['800px', '0px'] )
  const tree2YSpring = useSpring(tree2Y, physics) 
const tt = useSpring(0)

  const backgroundStyle = {
    background: 'linear-gradient(90deg, rgba(222,241,241,1) 0%, rgba(0,139,158,1) 100%);'
  };



  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      console.log("Current scroll Y position:", value); 
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
<div className='overflow-y-hidden'>
      <motion.div
        ref={ref}
        id="canvas"
        className="w-full bg-gradient-to-r from-[#def1f1] to-[#008b9e] relative h-[2000px]"
        style={{ height: '3000px', ...backgroundStyle }}
      >
        <motion.img src={building} className='fixed left-0 bottom-0 w-full' style={{y: treeYSpring}} />
        <motion.img src={tree01} className='fixed left-0 bottom-0' style={{y: treeYSpring}} />
        <motion.img src={tree02} className='fixed right-0 bottom-0' style={{y: tree2YSpring}} />

        <text fill="#fff" x="350" y="200">至上電子</text>
    <polyline className="arrow" fill="#fff" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />
    
    <g mask="url(#m)">
      <rect fill="#fff" width="100%" height="100%" />      
      <text x="350" y="200" fill="#162a43">永續至上</text>
    </g>

      </motion.div>

      <motion.div
        id="content"
        style={{y: tree2YSpring}}
        className="w-full rounded-[50px] bg-white -mt-[300px] h-[3000px] drop-shadow-2xl relative"
      >
        <h1 className="text-center text-[60px] pt-[100px] font-bold tracking-[10px] text-blue-300">
          相信深耕 共展未來
        </h1>
      </motion.div>
      </div>
    </>
  );
}
