import { Swiper, SwiperSlide } from "swiper/react";
import NewsSwiperItem from "./NewsSwiperItem";
import "swiper/css/pagination";
import "swiper/css";
import "./HeroSwiper.css";
import event01 from "../../assets/img/event01.jpg";
import event02 from "../../assets/img/event02.jpg";

export default function NewsSwiper() {
  return (
    <main className="cursor-grab">
      <Swiper slidesPerView={1.2} spaceBetween={100}>
        <SwiperSlide>
          <NewsSwiperItem
            image={event01}
            title={"教育扎根在長安國中"}
            content={"本公司與國立臺灣師範大學科技應用與人力資源發展學系攜手合作，展開「動手做STEAM多元智能晨光時間」！活動旨在啟發長安國中特教學生發展多元智能，長安國中校方對計畫的執行給予高度評價，感謝至上電子和臺師大的合作和支持，期待未來繼續合作。透過贊助為有不同學習需求的孩子們搭建通往實現夢想的橋樑，培養其興趣和熱情。"}
            comp1={"至上電子"}
            comp2={"國立臺灣師範大學"}
            compTitle={"動手做STEAM多元智能晨光時間"}
            url={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NewsSwiperItem
            image={event02}
            title={"教育扎根在長安國中"}
            content={"本公司與國立臺灣師範大學科技應用與人力資源發展學系攜手合作，展開「動手做STEAM多元智能晨光時間」！活動旨在啟發長安國中特教學生發展多元智能，長安國中校方對計畫的執行給予高度評價，感謝至上電子和臺師大的合作和支持，期待未來繼續合作。透過贊助為有不同學習需求的孩子們搭建通往實現夢想的橋樑，培養其興趣和熱情。"}
            comp1={"至上電子"}
            comp2={"國立臺灣師範大學"}
            compTitle={"動手做STEAM多元智能晨光時間"}
            url={""}
          />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
