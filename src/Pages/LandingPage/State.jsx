import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const Stat = ({ num, suffix, decimals = 0, subheading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <>
      {" "}
      <span ref={ref}></span>
      {suffix}
    </>
  );
};
