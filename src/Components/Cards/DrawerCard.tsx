import React from "react";
import { CSSProperties } from "react";

type CardProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  content: string;
};

const DrawerCard: React.FC<CardProps> = ({ backgroundImage, title, subtitle, content }) => {
  const cardStyle: CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative group">
      <div
        className="rounded-[30px] py-8 px-8 h-[100%] aspect-[9/10] glow-card relative overflow-hidden min-h-[240px] duration-300 hover:shadow-xl hover:scale-[1.04] z-30"
        style={cardStyle}
      >
        <div className="w-[100%] h-[100%] z-10 absolute bg-black/30 left-0 top-0 rounded-[30px]"></div>
        <p className="absolute text-white z-20 font-serif text-[90px] -right-1 -bottom-4">
          {title.split('/').map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>

      <div className="absolute shadow-xl w-full left-0 group-hover:pb-12 bottom-0 opacity-0 group-hover:opacity-100 duration-300 group-hover:translate-y-[85%] pt-[20%] rounded-b-[30px] px-8 z-20 bg-white">
        <p className="text-center w-full text-[24px] font-bold text-[#555555] font-serif tracking-[2px]">
          <span className="text-[#FF8D50]">《 </span>{subtitle}<span className="text-[#FF8D50]"> 》</span>
        </p>
        <p className="text-[#555555] text-[14px] mt-4 leading-[28px] tracking-[1px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default DrawerCard;
