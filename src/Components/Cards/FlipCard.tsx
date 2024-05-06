import "./FlipCard.css";
import { CSSProperties, ReactNode } from "react";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

type CardProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  content: string;
  iconComponent: ReactNode; // Accept any React component as a prop
};

const FlipCard: React.FC<CardProps> = ({
  backgroundImage,
  title,
  subtitle,
  content,
  iconComponent, // Destructure the iconComponent prop
}) => {
  const cardStyle: CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="flip-card hover:scale-[1.1] duration-300">
      <div className="flip-card-inner">
        <div
          className="flip-card-front flex flex-col justify-center overflow-hidden bg-cover bg-center"
          style={cardStyle}
        >
          <div className="w-[100%] h-[100%] z-10 absolute bg-black/30 left-0 top-0"></div>
          <div className="text-white z-20 mb-6 text-5xl">{iconComponent}</div>
          <p className="text-white font-bold text-3xl tracking-[4px] z-20">
            {subtitle}
          </p>
        </div>
        <div className="flip-card-back flex flex-col justify-end p-8 text-left bg-[#efefef] glow-card ">
          <div className="text-[#262626] z-20 mb-4 text-6xl">{iconComponent}</div>
          <Arrow className=" mb-8" />
          <p className="text-[14px] font-light text-[#262626]">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
