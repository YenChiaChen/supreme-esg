import img_card01 from "../../assets/img/cards/1.png";
import img_card02 from "../../assets/img/cards/2.png";
import img_card03 from "../../assets/img/cards/3.png";
import DrawerCard from "../../Components/Cards/DrawerCard";

export default function DrawerCardList() {
  return (
    <div className="grid grid-cols-3 gap-8 mt-12">
      <DrawerCard
        backgroundImage={img_card01}
        title="在/地"
        subtitle="關心在地"
        content="致力環境保護，承諾將積極減少溫室氣體排放、推動資源循環利用、減少廢棄物的產生，力求企業的永續發展及為環境保護盡一份力。"
      />
      <DrawerCard
        backgroundImage={img_card02}
        title=" 培/力"
        subtitle="關懷培力"
        content="注重人權規範及員工權益，承諾創建一個對等、公平以及健康的工作環境，建立有效溝通管道，聆聽基層意見，並提供多元化培訓增進員工價值。社會方面將公益熱忱轉化為實際行動，持續投入時間和資源以支持社會公益項目，將溫馨關懷回饋於社會。"
      />
      <DrawerCard
        backgroundImage={img_card03}
        title="根/基"
        subtitle="關注根基"
        content="  謹慎落實風險管理，靈活投資策略，確保績效提升，穩定公司營運根基。同時遵守商業行為有關法令，維護相關利害關係人權益。
              致力實現經濟、社會和環境之間的平衡，承諾在創造價值的同時兼顧永續發展，為員工、合作夥伴、社區帶來正面的影響。"
      />
    </div>
  );
}
