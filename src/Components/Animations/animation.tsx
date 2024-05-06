import React from "react";
import { motion } from "framer-motion";
import variants from "./animationVariants";
import { useInView } from "react-intersection-observer";

interface AnimateComponentProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  animationType?: keyof typeof variants;
  transformOrigin?: string;
}

const AnimateComponent: React.FC<AnimateComponentProps> = ({
  children,
  duration = 0.5,
  delay = 0,
  animationType = "slideUp",
  transformOrigin = "50% 50%",
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5,
  });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="hidden"
      transition={{ duration, delay }}
      variants={variants[animationType]}
      style={{ transformOrigin }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateComponent;
