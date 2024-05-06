import img_bg from "../../assets/img/bg2.png";
import NavBar from "../../Components/Nav/NavBar";
import FlipCardList from "../../Components/Cards/FlipCardList";
import { CSSProperties, useEffect } from "react";
import SwitchCardList from "../../Components/Cards/SwitchCardList";
import AnimateComponent from "../../Components/Animations/animation";
import ParallaxComponent from "../../Components/Animations/parallax";
import Lenis from "@studio-freight/lenis";
export default function LandingPage() {
  const heroStyle: CSSProperties = {
    backgroundImage: `url(${img_bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <div>
      <NavBar />
      <div className="h-[100svh]" style={heroStyle}>
        <div className="flex flex-col justify-end pb-[18rem] text-white h-full container mx-auto">
          <ParallaxComponent offset={0.5} min={-10} max={1000}>
            <AnimateComponent
              animationType="zoomIn"
              duration={1.5}
              delay={0.1}
              transformOrigin="100% 0%"
            >
              <h1 className="text-6xl font-bold tracking-[8px] opacity-80 w-fit">
                永續至上
              </h1>
            </AnimateComponent>
            <p className="text-xl font-light mt-8 opacity-80">
              致力環境保護發展，守護每位員工權益， 承諾給予社會正面價值。
            </p>
          </ParallaxComponent>
        </div>
      </div>
      <div className="bg-white -mt-[10rem] rounded-t-[5rem]">
        <div className="container mx-auto py-24">
          <p className="text-center font-semibold  text-5xl  text-[#555555] tracking-[6px] ">
            相信深耕 共展未來
          </p>
          <p className="text-center text-[#555555] mt-8 font-light">
            {" "}
            致力實現經濟、社會和環境之間的平衡，承諾在創造價值的同時兼顧永續發展，為員工、合作夥伴、社區帶來正面的影響。
          </p>
          <FlipCardList />
        </div>
        <div className="">
          <div className="container mx-auto">
            <SwitchCardList />
          </div>
        </div>
      </div>
    </div>
  );
}
