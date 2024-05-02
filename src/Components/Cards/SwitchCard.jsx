"use client";
import "./SwitchCard.css";
import forest from "../../assets/img/forest.png";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef } from 'react';
import { Stat } from "../../Pages/LandingPage/State";


const SwitchCard = ({i, title, description, src, url, color, progress, range, targetScale}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);


  return (
    <div className="cardContainer" ref={container} >
      <motion.div
        className="card text-[#262626]"
        style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * 25}px)`}} 
      >
        <div className="grid grid-cols-5 gap-12">
          <div className="flex flex-col justify-end gap-6 col-span-2">
            <h1 className="text-4xl font-bold">{title}</h1>
            <Arrow />
            <p className="font-light">{description}</p>
          </div>
          <div className="w-full overflow-hidden rounded-xl col-span-3 relative" >
            <motion.img src={forest} className="w-full rounded-xl" style={{scale: imageScale}} />
            <div className="absolute w-[90%] left-[5%] h-[90%] top-[5%] grid  grid-cols-2 gap-6">
                <div className="border-[1px] border-white rounded-[2rem] backdrop-blur-lg flex flex-col justify-between text-white p-8">
                    <p className="text-[16px] font-light">2022年廢棄物處理回收量達：</p>
                    <div className="text-5xl font-bold">
                    <Stat suffix={'%'} num={100} />
                    </div>
                </div>
                <div className="border-[1px] border-white rounded-[2rem] backdrop-blur-lg flex flex-col justify-between text-white p-8">
                    <p className="text-[16px] font-light">舉辦淨灘、淨山活動，共計撿拾清除了近廢物：</p>
                    <div className="text-5xl font-bold">
                    <Stat suffix={'公斤'} num={420} />
                    </div>
                </div>
                <div className="border-[1px] border-white rounded-[2rem] backdrop-blur-lg flex flex-col justify-between text-white p-8">
                    <p className="text-[16px] font-light">2022年減少 A4 紙用紙量約：</p>
                    <div className="text-5xl font-bold">
                    <Stat suffix={'K張'} num={278} />
                    </div>
                </div>

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SwitchCard;
