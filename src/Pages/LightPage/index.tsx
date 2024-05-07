import { CSSProperties } from "react";
import ParallaxComponent from "../../Components/Animations/parallax";
import Footer from "../../Components/Nav/Footer";
import NavBar from "../../Components/Nav/NavBar";
import bg from "../../assets/img/bg/bg04.jpg";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Temp01} from '../../assets/temp/01.svg'

export default function LightPage() {
  const heroStyle: CSSProperties = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <>
      <NavBar />
      <div className="h-[80svh]" style={heroStyle}>
        <div className="flex flex-col justify-end pb-36 pl-6  h-full container mx-auto text-white">
          <h1 className="text-6xl font-bold tracking-[8px] w-fit">點亮永續</h1>
          <p className="text-[18px] mt-8 opacity-80 w-[60%] tracking-[2px] leading-[35px]">
            致力環境保護發展，守護每位員工權益， 承諾給予社會正面價值。
          </p>
        </div>
      </div>

      <div className="bg-white -mt-[4rem] rounded-t-[3rem] relative z-10">
        <div className="container mx-auto pt-12 mt-2 px-6">
          <p className="text-[16px] text-[#5B5B5B]">
            點亮永續 &nbsp;
            <FontAwesomeIcon icon={faChevronRight} /> &nbsp;
            <span>ESG 永續績效</span>
          </p>
          <p className="text-center font-semibold  text-[32px]  text-[#FF8D50] tracking-[6px] mt-24">
            永續績效 積極發展
          </p>
          <p className="text-[#555555] text-[16px] tracking-[1px] leading-[30px] mt-12">
            致力於企業永續發展，注重推動公司治理、發展永續環境，並期待用企業的力量維護社會公益。同時亦積極呼應聯合國永續發展行動目標
            ( Sustainable Development Goals,SDGs )
            的推展，將其納入公司之目標設立，除加強核心本業的發展外，更期待能協助解決全球性問題，並創造更美好的未來。
          </p>
          <p className="text-center font-semibold  text-[32px]  text-[#FF8D50] tracking-[6px] mt-48">
          ESG 績效亮點
          </p>
          <div className="flex justify-center mt-12">
         <Temp01 />
         </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
