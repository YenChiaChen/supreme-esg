import DrawerCardList from "../../Components/Cards/DrawerCardList";
import img_bg from "../../assets/img/bg.png";
import { CSSProperties } from "react";

export default function LandingPage() {
  const heroStyle: CSSProperties = {
    backgroundImage: `url(${img_bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed"
  };

  return (
    <div>
      <div className="h-[100svh]" style={heroStyle}>
        <div className="flex flex-col justify-end pb-[18rem] text-white h-full container mx-auto">
            <h1 className="text-6xl font-bold tracking-[8px]">永續至上</h1>
            <p className="text-xl font-light mt-8">致力環境保護發展，守護每位員工權益， 承諾給予社會正面價值。</p>
        </div>
      </div>
      <div className="bg-[#efefef] -mt-[10rem] rounded-t-[5rem]">
        <div className="container mx-auto py-24">
          <p className="text-center font-semibold  text-5xl  text-[#555555] tracking-[6px] ">
            相信深耕 共展未來
          </p>
          <DrawerCardList />
        </div>
        <div className="h-[2000px]"></div>
      </div>
    </div>
  );
}
