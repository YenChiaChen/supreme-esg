import FlipCardList from "../../Components/Cards/FlipCardList";
import SwitchCardList from "../../Components/Cards/SwitchCardList";
import HeroSwiper from "./HeroSwiper";
import NewsSwiper from "../HomePage/NewsSwiper";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  return (
    <>
      <HeroSwiper />
      <div className="bg-white -mt-[3rem] rounded-t-[3rem] h-[5000px] relative z-10">
        <div className="container mx-auto py-24 highlight">
          <p className="text-center font-semibold  text-5xl  text-[#FF8D50] tracking-[6px] ">
            相信深耕 共展未來
          </p>
          <p className="text-center text-[#5B5B5B] mt-8 text-[14px] tracking-[1px] ">
            {" "}
            致力實現經濟、社會和環境之間的平衡，承諾在
            <span>創造價值的同時兼顧永續發展</span>
            ，為員工、合作夥伴、社區帶來正面的影響。
          </p>
          <FlipCardList />
        </div>

        <div className="bg-[#f0ebeb]">
          <div className="container mx-auto">
            <SwitchCardList />
          </div>
        </div>

        <div className="container mx-auto py-24">
          <p className="text-center font-semibold  text-5xl  text-[#FF8D50] tracking-[6px] ">
            熱血至上 公益你我
          </p>
          <NewsSwiper />
        </div>
      </div>
    </>
  );
}
