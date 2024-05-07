
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

const Footer: React.FC = () => {
    return (
        <div className="bg-[#D9F2F3] w-full rounded-t-[4rem] mt-24">
        <div className="container mx-auto grid grid-cols-8 gap-8 py-16">
          <div className="col-span-3">
            <a href='http://www.supreme.com.tw/' target="blanked"><img src={Logo} alt="logo" className="w-[30%]  cursor-pointer" /></a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[14px] font-bold mb-8">點亮永續</p>
            <Link to='/light'><p className="text-[12px] font-light cursor-pointer duration-300 hover:font-bold hover:text-[#FF8D50]">永續績效</p></Link>
            <p className="text-[12px] font-light cursor-pointer duration-300 hover:font-bold hover:text-[#FF8D50]">董事長的話</p>
            <p className="text-[12px] font-light cursor-pointer duration-300 hover:font-bold hover:text-[#FF8D50]">永續發展藍圖</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[14px] font-bold mb-8">社會共榮</p>
            <p className="text-[12px] font-light">社會共榮政策</p>
            <p className="text-[12px] font-light">教育文化</p>
            <p className="text-[12px] font-light">體育活動</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[14px] font-bold mb-8">幸福企業</p>
            <p className="text-[12px] font-light">人力資源分布</p>
            <p className="text-[12px] font-light">員工薪酬福利與關懷</p>
            <p className="text-[12px] font-light">員工權益保障</p>
            <p className="text-[12px] font-light">人才培育與留任</p>
            <p className="text-[12px] font-light">職業安全衛生</p>
            <p className="text-[12px] font-light">健康職場</p>
            <p className="text-[12px] font-light">人權政策</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[14px] font-bold mb-8">永續經營</p>
            <p className="text-[12px] font-light">公司治理</p>
            <p className="text-[12px] font-light">董事會</p>
            <p className="text-[12px] font-light">永續發展委員會</p>
            <p className="text-[12px] font-light">利害關係人議合</p>
            <p className="text-[12px] font-light">誠信經營</p>
            <p className="text-[12px] font-light">舉報管道與機制</p>
            <p className="text-[12px] font-light">風險管理</p>
            <p className="text-[12px] font-light">顧客隱私</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[14px] font-bold mb-8">永續共生</p>
            <p className="text-[12px] font-light">氣候變遷對策</p>
            <p className="text-[12px] font-light">溫室氣體＆行動方案</p>
            <p className="text-[12px] font-light">環境保護</p>
            <p className="text-[12px] font-light">能源管理</p>
            <p className="text-[12px] font-light">廢棄物管理</p>
            <p className="text-[12px] font-light">產品與客戶服務</p>
            <p className="text-[12px] font-light">綠色能源</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;