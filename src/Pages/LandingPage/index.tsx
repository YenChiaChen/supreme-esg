import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function LandingPage() {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
  });
  const [positionY, setPositionY] = useState(0);

  // // Transform the Y position and opacity based on scroll
  //const y = useTransform(scrollYProgress, [0, 0.4], ['0%', '-100%']); // Moves up as you scroll down
  // const opacity = useTransform(scrollYProgress, [300, 1000], [1, 0]); // Fades out as you scroll down
  // const left = useTransform(scrollYProgress, [0,1.0], ["40%", "5%"]); // Fades out as you scroll down
  // const cloud01Y = useTransform(scrollYProgress, [0.5, 1.0], ['0%', '-200%']);

  useEffect(() => {
    // This function is called whenever scrollY changes
    const unsubscribe = scrollY.on("change", (value) => {
      console.log("Scroll Y:", value); // Log the current scroll value to the console
      console.log(window.innerHeight);
      setPositionY(window.innerHeight + value - window.innerHeight / 2);
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      <div ref={ref} className="h-[500vh] relative">
        <motion.div
          className="absolute right-[3%] bg-white shadow-xl p-4 translate-y-1/2 text-left"
          animate={{ y: positionY }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 50, 
            mass: 0.4, 
          }}
        >
          <p className='text-left my-2'>Overview</p>
          <p className='text-left my-2'>Background</p>
          <p className='text-left my-2'>Result</p>
        </motion.div>
      </div>
    </>
  );
}
