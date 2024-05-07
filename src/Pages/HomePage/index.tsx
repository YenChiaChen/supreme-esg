import FlipCardList from "../../Components/Cards/FlipCardList";
import SwitchCardList from "../../Components/Cards/SwitchCardList";
import HeroSwiper from "./HeroSwiper";
import NewsSwiper from "../HomePage/NewsSwiper";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import SpecialNewsSwiper from "./SpecialNewsSwiper";
import { ReactComponent as Download } from "../../assets/icons/downloads.svg";
import NavBar from "../../Components/Nav/NavBar";
import Logo from "../../assets/img/logo.png";
import AnimateComponent from "../../Components/Animations/animation";
import bridge from "../../assets/img/bridge.png"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../Components/Nav/Footer";
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
      <NavBar />
      <HeroSwiper />
      <div className="bg-white -mt-[4rem] rounded-t-[3rem]  relative z-10">
        <div className="h-[50px] w-full bg-[#FF8D50] rounded-full container mx-auto -translate-y-1/2 flex items-center px-8 text-white tracking-[1px] flex justify-between">
          最新消息｜&lt; 問卷調查連結 &gt;
          至上電子股份有限公司利害關係人ESG關注議題問卷
          <div>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="cursor-pointer duration-300 hover:scale-[1.3]"
            />{" "}
            &nbsp;{" "}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="cursor-pointer duration-300 hover:scale-[1.3]"
            />
          </div>
        </div>
        <div className=" mx-auto py-24 mt-8 relative">
          <img src={bridge} alt='bridge' className="absolute right-0 bottom-0 translate-y-[90%] w-[70%]" />
          <AnimateComponent duration={1} delay={1}>
            <p className="text-center font-semibold  text-5xl  text-[#FF8D50] tracking-[6px] z-10 relative">
              相信深耕 共展未來
            </p>
          </AnimateComponent>
          <AnimateComponent duration={1} delay={2}>
            <p className="text-center text-[#5B5B5B] mt-8 text-[14px] tracking-[1px]  z-10 relative">
              {" "}
              致力實現經濟、社會和環境之間的平衡，承諾在
              <span>創造價值的同時兼顧永續發展</span>
              ，為員工、合作夥伴、社區帶來正面的影響。
            </p>
          </AnimateComponent>
          <AnimateComponent animationType="zoomIn" duration={1} delay={2}>
            <FlipCardList />
          </AnimateComponent>
        </div>

        <div className="">
          <div className="container mx-auto">
            <SwitchCardList />
          </div>
        </div>

        <div className="container mx-auto py-24">
          <AnimateComponent duration={1} delay={0.2}>
            <p className="text-center font-semibold  text-5xl  text-[#FF8D50] tracking-[6px] ">
              熱血至上 公益你我
            </p>
          </AnimateComponent>

          <AnimateComponent duration={1} delay={0.2}>
            <NewsSwiper />
          </AnimateComponent>
        </div>

        <div className="bg-[#FF8D50] bg-opacity-[5%]">
          <div className="container mx-auto py-24 s">
            <AnimateComponent duration={1} delay={0.2}>
              <p className="text-center font-semibold  text-5xl text-[#262626] tracking-[6px] ">
                特別報導
              </p>
            </AnimateComponent>
            <AnimateComponent duration={1} delay={0.2}>
              <SpecialNewsSwiper />
            </AnimateComponent>
          </div>
        </div>

        <div className="container mx-auto py-24 s">
          <p className="text-center font-semibold  text-5xl text-[#FF8D50] tracking-[6px] ">
            報告書下載
          </p>
          <div className="grid grid-cols-2 gap-8 mt-24">
            <div className="w-full  rounded-[2rem] px-12 py-10 text-[24px] duration-300 hover:scale-[1.05] hover:shadow-xl cursor-pointer  bg-[#F5F5F5]  flex justify-between items-center">
              2022年永續報告書
              <span>
                <Download className="w-[40px] h-[40px]" fill="#FF8D50" />
              </span>
            </div>
            <div className="w-full bg-[#F5F5F5] rounded-[2rem] px-12 py-10 text-[24px] duration-300 hover:scale-[1.05] hover:shadow-xl cursor-pointer  flex justify-between items-center">
              2021年永續報告書
              <span>
                <Download className="w-[40px] h-[40px]" fill="#FF8D50" />
              </span>
            </div>
            <div className="w-full bg-[#F5F5F5] rounded-[2rem] px-12 py-10 text-[24px] duration-300 hover:scale-[1.05] hover:shadow-xl cursor-pointer  flex justify-between items-center">
              2023年至上集團財務報告
              <span>
                <Download className="w-[40px] h-[40px]" fill="#FF8D50" />
              </span>
            </div>
            <div className="w-full bg-[#F5F5F5] rounded-[2rem] px-12 py-10 text-[24px] duration-300 hover:scale-[1.05] hover:shadow-xl cursor-pointer  flex justify-between items-center">
              2022年至上集團財務報告
              <span>
                <Download className="w-[40px] h-[40px]" fill="#FF8D50" />
              </span>
            </div>
          </div>
        </div>
        <AnimateComponent duration={1} delay={0} animationType="slideUp">
          <Footer />
        </AnimateComponent>
      </div>
    </>
  );
}
