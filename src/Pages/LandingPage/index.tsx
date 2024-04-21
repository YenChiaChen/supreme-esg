import img_bg from "../../assets/img/bg.png";
import img_building from "../../assets/img/buildingonly.png";
import img_tree from "../../assets/img/tree2.png";
import img_bush from "../../assets/img/bush.png";
import img_card01 from "../../assets/img/cards/1.png";
import img_card02 from "../../assets/img/cards/2.png";
import img_card03 from "../../assets/img/cards/3.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function LandingPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const buildingY = useTransform(scrollYProgress, [0, 0.2], ["80%", "10%"]);
  const treeY = useTransform(scrollYProgress, [0, 0.1], ["200%", "0%"]);
  const bushY = useTransform(scrollYProgress, [0, 0.1], ["100%", "56%"]);
  const physics = { damping: 15, mass: 0.9, stiffness: 50 };
  const buildingSpring = useSpring(buildingY, physics);
  const treespring = useSpring(treeY, physics);
  const bushSpring = useSpring(bushY, physics);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      console.log("Current scroll Y position:", value);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={ref}>
      <div className="w-full max-w-[2400px] mx-auto h-[90svh] max-h-[1000px] bg-gradient-to-r from-[#19734E] to-[#3C9180] relative overflow-hidden rounded-full mt-[5vh] shadow-[inset_0_16px_24px_rgba(0,0,0,0.1)]">
        <div className="w-fit text-white text-[14px] font-light flex justify-center flex-wrap gap-2 absolute left-1/2 -translate-x-1/2 top-8 items-center z-20">
          <p
            className="duration-300 cursor-pointer hover:bg-gray-700/20 px-4 py-2 rounded-full"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            點亮永續
          </p>
          <p
            className="duration-300 cursor-pointer hover:bg-gray-700/20 px-4 py-2 rounded-full"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            最新消息
          </p>
          <p
            className="duration-300 cursor-pointer hover:bg-gray-700/20 px-4 py-2 rounded-full"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            社會共榮
          </p>
          <p className="text-[20px] font-bold duration-300 cursor-pointer hover:bg-gray-700/20 px-4 py-2 rounded-full">
            至上電子
          </p>
          <p
            className="duration-300 cursor-pointer hover:bg-gray-700/20 px-4 py-2 rounded-full"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            幸福企業
          </p>
          <p
            className="duration-300 cursor-pointer hover:bg-gray-700/20 px-4 py-2 rounded-full"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            永續經營
          </p>
          <p
            className="duration-300 cursor-pointer hover:bg-gray-700/20 px-4 py-2 rounded-full"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            永續共生
          </p>
        </div>
        <div
          className={`top-[70px] left-1/2 -translate-x-1/2 text-white text-[14px] absolute z-30  duration-300  ${
            isVisible ? "opacity-100 " : "opacity-0 hidden"
          }`}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          <div className="bg-gray-700/20  p-8 rounded-xl shadow-xl mt-4 ">
            <div className="flex gap-8">
              <div className="flex flex-col gap-3 font-light">
                <p className="font-regular text-[#FFC759] mb-2 cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  點亮永續
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  ESG總覽
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  永續績效
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  董事長的話
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  永續發展藍圖
                </p>
              </div>
              <div className="flex flex-col gap-3 font-light">
                <p className="font-regular text-[#FFC759] mb-2 cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  社會共榮
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  社會共榮政策與執行成果
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  教育文化
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  體育活動
                </p>
              </div>
              <div className="flex flex-col gap-3 font-light">
                <p className="font-regular text-[#FFC759] mb-2 cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  幸福企業
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  人力資源分布
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  員工薪酬福利與關懷
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  員工權益保障
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  人才培育與留任
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  職業安全衛生
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  健康職場
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  人權政策
                </p>
              </div>
              <div className="flex flex-col gap-3 font-light">
                <p className="font-regular text-[#FFC759] mb-2 cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  永續經營
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  ESG總覽
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  永續績效
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  董事長的話
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  永續發展藍圖
                </p>
              </div>
              <div className="flex flex-col gap-3 font-light">
                <p className="font-regular text-[#FFC759] mb-2 cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  永續共生
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  ESG總覽
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  永續績效
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  董事長的話
                </p>
                <p className="cursor-pointer duration-300 border-l-[2px] border-l-transparent pl-2 hover:font-bold hover:border-l-[#FFC759]">
                  永續發展藍圖
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center h-[100%]  container  mx-auto  text-white z-10 relative">
          <h1 className="text-[64px] font-semibold ">永續至上</h1>
          <p className="text-[20px] mt-4 font-light tracking-[2px]">
            致力環境保護發展，守護每位員工權益， <br />
            承諾給予社會正面價值。
          </p>
        </div>
        <motion.img
          src={img_building}
          alt="imgBuilding"
          className="absolute -right-[10%] bottom-0 w-[60%]"
          style={{ y: buildingSpring }}
        />
        <motion.img
          src={img_tree}
          alt="imgTree"
          className="absolute -right-[5%] bottom-0 w-[55%]"
          style={{ y: treespring }}
        />
        <motion.img
          src={img_bush}
          alt="imgBush"
          className="absolute right-[27%] -bottom-[29%] w-[45%]"
          style={{ y: bushSpring }}
        />
      </div>

      <div className="container mx-auto mt-[10vh]">
        <div className="grid grid-cols-3 items-center mt-16">
          <div className='h-[2px] w-full bg-[#FFC759]'></div>
          <p className="text-center  text-[36px]  text-[#555555] split-text font-serif">
            相信深耕 共展未來
          </p> 
          <div className='h-[2px] w-full bg-[#FFC759]'></div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-12">
          <div className="relative group">
            <div
              className=" rounded-[30px]  py-8 px-8 h-[100%] glow-card relative overflow-hidden min-h-[240px] duration-300 hover:shadow-xl hover:scale-[1.04] z-20"
              style={{
                backgroundImage: `url(${img_card01})`,
                backgroundSize: "cover",
              }}
            >
              <div className="w-[100%] h-[100%] z-10 absolute bg-black/30 left-0 top-0 rounded-[30px]"></div>
              <p className="absolute text-white z-20 font-serif text-[90px] -right-1 -bottom-4">
                在<br />地
              </p>
            </div>

            <div className="absolute shadow-xl w-full left-0 group-hover:pb-12 top-0 duration-300 group-hover:translate-y-[80%] pt-[20%] rounded-b-[30px] px-8 z-10 bg-white">
              <p className="text-center w-full text-[24px] font-bold text-[#555555] font-serif tracking-[2px]">
                <span className="text-[#FF8D50]">《 </span>關心在地{" "}
                <span className="text-[#FF8D50]">》</span>
              </p>
              <p className="text-[#555555] text-[14px] mt-4 leading-[28px] tracking-[1px]">
                致力環境保護，承諾將積極減少溫室氣體排放、推動資源循環利用、減少廢棄物的產生，力求企業的永續發展及為環境保護盡一份力。
              </p>
            </div>
          </div>
          <div className="relative group">
            <div
              className=" rounded-[30px]  py-8 px-8 h-[100%] glow-card relative overflow-hidden min-h-[240px] duration-300 hover:shadow-xl hover:scale-[1.04] z-20"
              style={{
                backgroundImage: `url(${img_card02})`,
                backgroundSize: "cover",
              }}
            >
              <div className="w-[100%] h-[100%] z-10 absolute bg-black/30 left-0 top-0 rounded-[30px]"></div>
              <p className="absolute text-white z-20 font-serif text-[90px] -right-1 -bottom-4">
                培<br />力
              </p>
            </div>

            <div className="absolute shadow-xl w-full left-0 top-0 group-hover:pb-12  duration-300 group-hover:translate-y-[80%] pt-[15%] rounded-b-[30px] px-8 z-10 bg-white">
              <p className="text-center w-full text-[24px] font-bold text-[#555555] font-serif  tracking-[2px]">
                <span className="text-[#FF8D50]">《 </span>關懷培力{" "}
                <span className="text-[#FF8D50]">》</span>
              </p>
              <p className="text-[#555555] text-[14px] mt-4 leading-[28px] tracking-[1px]">
                注重人權規範及員工權益，承諾創建一個對等、公平以及健康的工作環境，建立有效溝通管道，聆聽基層意見，並提供多元化培訓增進員工價值。社會方面將公益熱忱轉化為實際行動，持續投入時間和資源以支持社會公益項目，將溫馨關懷回饋於社會。
              </p>
            </div>
          </div>
          <div className="relative group ">
            <div
              className=" rounded-[30px]  py-8 px-8 h-[100%] glow-card relative overflow-hidden min-h-[240px] duration-300 hover:shadow-xl hover:scale-[1.04] z-20"
              style={{
                backgroundImage: `url(${img_card03})`,
                backgroundSize: "cover",
              }}
            >
              <div className="w-[100%] h-[100%] z-10 absolute bg-black/30 left-0 top-0 rounded-[30px]"></div>
              <p className="absolute text-white z-20 font-serif text-[90px] -right-1 -bottom-4">
                根<br />基
              </p>
            </div>

            <div className="absolute shadow-xl w-full left-0 top-0  duration-300 group-hover:translate-y-[80%] group-hover:pb-12 pt-[15%] rounded-b-[30px] px-8 z-10 bg-white">
              <p className="text-center w-full text-[24px] font-bold text-[#555555] font-serif tracking-[2px]">
                <span className="text-[#FF8D50]">《 </span>關注根基{" "}
                <span className="text-[#FF8D50]">》</span>
              </p>
              <p className="text-[#555555] text-[14px] mt-4 leading-[28px] tracking-[1px]">
                謹慎落實風險管理，靈活投資策略，確保績效提升，穩定公司營運根基。同時遵守商業行為有關法令，維護相關利害關係人權益。
                致力實現經濟、社會和環境之間的平衡，承諾在創造價值的同時兼顧永續發展，為員工、合作夥伴、社區帶來正面的影響。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gradient-to-r from-[#19734E] to-[#3C9180] mt-[300px]'>
        <div className="container mx-auto text-white">
          <p className="text-[52px] pt-16 font-semibold">永續成果</p>
        </div>
      </div>
    </div>
  );
}
