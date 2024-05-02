import img_bg from "../../assets/img/bg3.png";
import NavBar from "../../Components/Nav/NavBar";
import FlipCardList from "../../Components/Cards/FlipCardList";
import { CSSProperties } from "react";
import SwitchCardList from "../../Components/Cards/SwitchCardList";

export default function LandingPage() {
  const heroStyle: CSSProperties = {
    backgroundImage: `url(${img_bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <div>
      <NavBar />
      <div className="h-[100svh]" style={heroStyle}>
        <div className="flex flex-col justify-end pb-[18rem] text-white h-full container mx-auto">
          <h1 className="text-6xl font-bold tracking-[8px]">永續至上</h1>
          <p className="text-xl font-light mt-8">
            致力環境保護發展，守護每位員工權益， 承諾給予社會正面價值。
          </p>
        </div>
      </div>
      <div className="bg-[#efefef] -mt-[10rem] rounded-t-[5rem]">
        <div className="h-[50px] w-full bg-[#FF8D50] rounded-full container mx-auto -translate-y-1/2 flex items-center px-8 text-white">
          最新消息
        </div>
        <div className="container mx-auto py-24">
          <p className="text-center font-semibold  text-5xl  text-[#555555] tracking-[6px] ">
            相信深耕 共展未來
          </p>
          <p className="text-center text-[#555555] mt-8 font-light">
            {" "}
            致力實現經濟、社會和環境之間的平衡，承諾在創造價值的同時兼顧永續發展，為員工、合作夥伴、社區帶來正面的影響。
          </p>
          <FlipCardList />

          <p className="text-center font-semibold  text-5xl  text-[#555555] tracking-[6px] mt-36 ">
            永續成果
          </p>
          <SwitchCardList />
        </div>
        <div className="h-[2000px]"></div>
      </div>
    </div>
  );
}
