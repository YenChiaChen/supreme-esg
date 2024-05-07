import { Swiper, SwiperSlide } from "swiper/react";
import HeroSwiperItem from "./HeroSwiperItem";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import bg01 from '../../assets/img/bg/bg01.jpg'
import bg02 from '../../assets/img/bg/bg02.jpg'
import bg03 from '../../assets/img/bg/bg03.jpg'
import bg04 from '../../assets/img/bg/bg04.jpg'
import bg05 from '../../assets/img/bg/bg05.jpg'
import "./HeroSwiper.css";

export default function HeroSwiper() {
  return (
    <main className="HeroSwiper cursor-grab">
      <Swiper
        slidesPerView={1}  
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        
      >
        <SwiperSlide>
          <HeroSwiperItem
            backgroundImage={bg01}
            title={"永續至上"}
            subTitle={
              "致力環境保護發展，守護每位員工權益， 承諾給予社會正面價值。"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSwiperItem
            backgroundImage={bg02}
            title={"藍圖展望 為上至上"}
            subTitle={
              "至上經過多年持續穩定的發展，在區域經濟歐、美、日、韓、台、中國等地已建立了非常堅實的基礎，今後仍持續追求更廣闊的藍圖、持續成長，打造共榮社會的永續企業。"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSwiperItem
            backgroundImage={bg04}
            title={"點亮永續 積極發展"}
            subTitle={
              "致力於企業永續發展，注重推動公司治理、發展永續環境，並期待用企業的力量維護社會公益。同時亦積極呼應聯合國永續發展行動目標的推展，期待能協助解決全球性問題，並創造更美好的未來。"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSwiperItem
            backgroundImage={bg03}
            title={"幸福企業 員工至上"}
            subTitle={
              "我們致力於創造一個充滿尊重、公平和包容的工作環境，讓每位員工都能在公司中感受到安全、尊重和認可，實現工作與生活的平衡，並共同成長與發展。"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSwiperItem
            backgroundImage={bg05}
            title={"永續經營"}
            subTitle={
              "至上於從事企業經營同時，積極實踐永續發展，以符合平衡環境，社會及公司治理發展之國際趨勢，並透過企業公民擔當，提升國家經濟貢獻，改善員工、社區及社會之生活品質，促進以企業責任為本之競爭優勢。"
            }
          />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
