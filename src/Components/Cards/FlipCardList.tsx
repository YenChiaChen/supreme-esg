import { faHandshake, faSmileWink } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img_card01 from "../../assets/img/cards/1.png";
import img_card02 from "../../assets/img/cards/2.png";
import img_card03 from "../../assets/img/cards/3.png";
import FlipCard from "./FlipCard";
import { faGlobe, faGear } from "@fortawesome/free-solid-svg-icons";

export default function FlipCardList() {
  const iconElement2 = <FontAwesomeIcon icon={faHandshake} />;
  const iconElement1 = <FontAwesomeIcon icon={faGlobe} />;
  const iconElement3 = <FontAwesomeIcon icon={faGear} />;
  return (
    <div className="grid grid-cols-3 gap-16 mt-12 w-[70%] mx-auto min-w-[1000px]">
      <FlipCard
        backgroundImage={img_card01}
        title="在地"
        subtitle="關心在地"
        content="致力環境保護，承諾將積極減少溫室氣體排放、推動資源循環利用、減少廢棄物的產生，力求企業的永續發展及為環境保護盡一份力。"
        iconComponent={iconElement1}
      />
      <FlipCard
        backgroundImage={img_card02}
        title=" 培力"
        subtitle="關懷培力"
        content="注重人權規範及員工權益，承諾創建一個對等、健康的工作環境，建立有效溝通管道，聆聽基層意見，並提供多元化培訓增進員工價值。"
        iconComponent={iconElement2}
      />
      <FlipCard
        backgroundImage={img_card03}
        title="根基"
        subtitle="關注根基"
        content="謹慎落實風險管理，靈活投資策略，確保績效提升，穩定公司營運根基。同時遵守商業行為有關法令，維護相關利害關係人權益。"
        iconComponent={iconElement3}
      />
    </div>
  );
}
