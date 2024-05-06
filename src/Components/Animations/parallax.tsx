import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

interface ParallaxComponentProps {
  children: React.ReactNode;
  offset: number;
  min: number; 
  max: number; 
}

const ParallaxComponent: React.FC<ParallaxComponentProps> = ({ children, offset, min, max }) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [min, max]);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};

export default ParallaxComponent;
