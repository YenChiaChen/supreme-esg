import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import urlBG from '../../Assets/img/bg.png'
import cloud01 from '../../Assets/img/cloud1.png'
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
  const left = useTransform(scrollYProgress, [0,1.0], ["40%", "5%"]); // Fades out as you scroll down
  const cloud01Y = useTransform(scrollYProgress, [0.5, 1.0], ['0%', '-200%']); 
  



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
        className="w-full bg-blue-300 relative"
      >
        <img src={urlBG} className='w-full' />
        <motion.img src={cloud01} className='w-full fixed left-0 top-0 z-50' style={{y: cloud01Y}} />
        <motion.img src={cloud02} className='w-full fixed left-0 top-0 z-40' />
        <motion.img src={cloud03} className='w-full fixed left-0 top-0 z-30' />
        <motion.h1 
          className="text-white fixed left-[40%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-[50px] font-black tracking-[10px] text-center w-[20%]"
          style={{y, opacity, left }} // Apply the dynamic styles
        >
          永續至上
        </motion.h1>
      </div>
      <motion.div
        id="content"
        className="w-full rounded-[50px] bg-white -mt-[80px] h-[1000px] drop-shadow-2xl relative"
      >
        <h1 className="text-center text-[60px] pt-[100px] font-bold tracking-[10px] text-blue-300">
          相信深耕 共展未來
        </h1>
      </motion.div>
    </>
  );
}
