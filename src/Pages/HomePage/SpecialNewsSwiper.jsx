import { Swiper, SwiperSlide } from "swiper/react";
import NewsSwiperItem from "./NewsSwiperItem";
import "swiper/css/pagination";
import "swiper/css";
import "./HeroSwiper.css";
import { Navigation } from "swiper/modules";
import news01 from "../../assets/img/news01.png";
import news02 from "../../assets/img/news02.png";
import news03 from "../../assets/img/news03.png";
import news04 from "../../assets/img/news04.png";
import { useCallback, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function SpecialNewsSwiper() {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <main className="mt-24">
      <Swiper
        slidesPerView={1}
        spaceBetween={100}
        navigation
        modules={[Navigation]}
        ref={sliderRef}
      >
        <SwiperSlide>
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 px-[20%] cursor-grab">
            <div className="col-span-1 ">
              <img
                src={news01}
                alt="news01"
                className="rounded-[2rem]  aspect-square object-cover"
              />
            </div>
            <div className="col-span-1">
              {" "}
              <p className="text-[#FF8D50] font-semibold text-[20px] ">
                新能源部門投資發展
              </p>
              <p className="mt-6 text-[16px] font-light tracking-[1px] leading-[30px]">
                本公司成立電機應用研發部門，延攬專業電子、電機、軟韌體相關人才，加大力度投資低壓電力驅動系統自主研發。目前已成功完成階段性目標，實現單體電機性能相關數據驗證且超過預期效能。
              </p>
              <button className="mt-6 text-[16px] border-[1px] rounded-full border-[#ED6B2C] text-[#ED6B2C] py-2 px-6 duration-300 hover:text-white hover:bg-[#ED6B2C] hover:scale-[1.1]">
                查看更多
              </button>
            </div>
            <div className="col-span-1 flex flex-col justify-end">
              {" "}
              <p className="text-[#FF8D50] font-semibold text-[20px]">
                2020《天下》2000大調查 — 榮獲最強50大集團殊榮
              </p>
              <p className="mt-12 text-[16px] font-light tracking-[1px] leading-[30px]">
                臺灣最強50大集團，20年誰還在榜上？誰又躍起擠進榜中？現今除了面對貿易戰、肺炎的挑戰，提出短期方案面對變局，也要擘劃長期結構轉型、人才教育佈局。
              </p>
              <button className="mt-12 text-[16px] border-[1px] rounded-full border-[#ED6B2C] w-fit text-[#ED6B2C] py-2 px-6 duration-300 hover:text-white hover:bg-[#ED6B2C] hover:scale-[1.1]">
                查看更多
              </button>
            </div>
            <div className="col-span-1">
              <img
                src={news02}
                alt="news01"
                className="rounded-[2rem] aspect-square object-cover "
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 px-[20%]">
            <div className="col-span-1">
              <img
                src={news03}
                alt="news01"
                className="rounded-[2rem]  aspect-square object-cover"
              />
            </div>
            <div className="col-span-1">
              {" "}
              <p className="text-[#FF8D50] font-semibold text-[20px]">
                代理生技品牌，跨足再生醫學領域
              </p>
              <p className="mt-12 text-[16px] font-light tracking-[1px] leading-[30px]">
                本公司於 2016 年投資成立子公司保康特生物科技股份有限公司 (
                以下簡稱：保康特生技 )，主要業務為自
                行研發快篩體外檢測系統、心音貼片等，以及代理多國新創生技品牌產品，秉持多角化經營和以人為本的醫療
                科技及服務理念，旨在提供人類更好的生活與未來。
              </p>
              <button className="mt-12 text-[16px] border-[1px] rounded-full border-[#ED6B2C] text-[#ED6B2C] py-2 px-6 duration-300 hover:text-white hover:bg-[#ED6B2C] hover:scale-[1.1]">
                查看更多
              </button>
            </div>
            <div className="col-span-1  flex flex-col justify-end">
              {" "}
              <p className="text-[#FF8D50] font-semibold text-[20px] pt-[6rem]">
                自行研發科技醫療器材
              </p>
              <p className="mt-12 text-[16px] font-light tracking-[1px] leading-[30px]">
                本公司成功研發出心音貼片集體外快篩檢測系統，不僅與特定醫院配合使用，體外快篩檢測系統還獲得中華民國發明專利與中國新型專利。
              </p>
              <button className="mt-12 text-[16px] border-[1px] rounded-full border-[#ED6B2C] text-[#ED6B2C] w-fit py-2 px-6 duration-300 hover:text-white hover:bg-[#ED6B2C] hover:scale-[1.1]">
                查看更多
              </button>
            </div>
            <div className="col-span-1">
              <img
                src={news04}
                alt="news01"
                className="rounded-[2rem] aspect-square object-cover "
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex gap-4 w-full justify-center mt-12">
        <div
          className="bg-white w-[60px] h-[60px] rounded-full shadow-xl flex items-center justify-center cursor-pointer text-[#D9F2F3] text-3xl hover:bg-[#D9F2F3] hover:text-white duration-300"
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div
          className="bg-white w-[60px] h-[60px] rounded-full shadow-xl flex items-center justify-center cursor-pointer text-[#D9F2F3] text-3xl hover:bg-[#D9F2F3] hover:text-white duration-300"
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </main>
  );
}
