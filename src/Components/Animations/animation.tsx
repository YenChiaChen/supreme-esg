import React from "react";
import { motion } from "framer-motion";
import variants from "./animationVariants";
import { useInView } from "react-intersection-observer";

interface AnimateComponentProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  animationType?: keyof typeof variants;
  transformOrigin?: string; // 新增這行
}

const AnimateComponent: React.FC<AnimateComponentProps> = ({
  children,
  duration = 0.5,
  delay = 0,
  animationType = "slideUp",
  transformOrigin = "50% 50%", // 預設為中心點
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // 確保動畫只觸發一次
    threshold: 0.5, // 元素至少有50%進入視野時觸發
  });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="hidden"
      transition={{ duration, delay }}
      variants={variants[animationType]}
      style={{ transformOrigin }} // 應用 transformOrigin 樣式
    >
      {children}
    </motion.div>
  );
};

export default AnimateComponent;
