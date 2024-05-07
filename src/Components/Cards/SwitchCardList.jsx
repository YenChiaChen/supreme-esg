"use client";
import { projects } from "../../data/achievements";
import SwitchCard from "./SwitchCard";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import AnimateComponent from "../../Components/Animations/animation";
import Forest from '../../assets/img/forest.png'
import Sea from '../../assets/img/building.jpg'
import Building from '../../assets/img/sea.jpg'

export default function SwitchCardList() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const imgList = {Forest, Sea, Building}

  return (
    <main ref={container} className="relative">
      <p className="font-semibold text-5xl text-[#FF8D50] tracking-[6px] mt-36 sticky top-[34%] -translate-y-1/2 left-[0%] leading-[60px]">
        永<br />續<br />成<br />果
      </p>

      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        const imgUrl = imgList[project.imageKey]; // Use the key to retrieve the correct image

        return (
          <SwitchCard
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            imgUrl={imgUrl}
          />
        );
      })}
    </main>
  );
}
