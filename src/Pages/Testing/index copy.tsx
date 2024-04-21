import { easeIn, motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import SmoothScroll from './SmoothScroll';
import urlBG from '../../Assets/img/building.png'
import tree01 from '../../Assets/img/tree1.png'
import cloud02 from '../../Assets/img/cloud2.webp'
import cloud03 from '../../Assets/img/cloud3.webp'

export default function LandingPage() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end end"]
    });

  // Transform the Y position and opacity based on scroll
  const y = useTransform(scrollYProgress, [0, 0.4], ['0%', '-100%']); // Moves up as you scroll down
  const opacity = useTransform(scrollYProgress, [300, 1000], [1, 0]); // Fades out as you scroll down
  const left = useTransform(scrollYProgress, [0,1.0], ["250%", "5%"]); // Fades out as you scroll down
  const cloud01Y = useTransform(scrollYProgress, [0.4, 1.0], ['50%', '0%']); 
  const bgY = useTransform(scrollYProgress, [0, 1.0], ['-100%', '-600%'] )

  const physics = { damping: 15, mass: 0.9, stiffness: 50 } // easing of smooth scroll
  const spring = useSpring(bgY, physics) 
  const springT = useSpring(left, physics) 
  



  useEffect(() => {
    // This function is called whenever scrollY changes
    const unsubscribe = scrollYProgress.on("change", (value) => {
      console.log("Current scroll Y position:", value); // Log the current scroll value to the console
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>

      <div
        ref={ref}
        id="canvas"
        className="w-full bg-blue-300 relative h-[400vh]"
      >
        <motion.img src={urlBG} className='w-full fixed' style={{y: spring}}  />
        <motion.img src={tree01} style={{y:spring}} className='absolute left-0 bottom-0'></motion.img>
        <motion.h1 
          className="text-white fixed left-[40%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-[50px] font-black tracking-[10px] text-center w-[20%]"
          style={{left: springT }} // Apply the dynamic styles
        >
          永續至上
        </motion.h1>
      </div>
      
      <motion.div
        id="content"
        className="w-full rounded-[50px] bg-white -mt-[300px] h-[1000px] drop-shadow-2xl relative"
      >
        <h1 className="text-center text-[60px] pt-[100px] font-bold tracking-[10px] text-blue-300">
          相信深耕 共展未來
        </h1>
      </motion.div>
    </>
  );
}
