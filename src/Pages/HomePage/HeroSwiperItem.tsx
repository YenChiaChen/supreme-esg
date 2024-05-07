import { CSSProperties } from "react";
import AnimateComponent from "../../Components/Animations/animation";
import ParallaxComponent from "../../Components/Animations/parallax";

type HeroSwiperItemProps = {
  backgroundImage: string;
  title: string;
  subTitle: string;
};

const HeroSwiperItem: React.FC<HeroSwiperItemProps> = ({
  backgroundImage,
  title,
  subTitle,
}) => {
  const heroStyle: CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };
  return (
    <div className="h-[80svh]" style={heroStyle}>
      <div className="flex flex-col justify-end pb-36 pl-6  h-full container mx-auto text-white">
        <ParallaxComponent offset={500} min={-10} max={1500}>
          <h1 className="text-6xl font-bold tracking-[8px] w-fit">{title}</h1>
          <p className="text-[18px] mt-8 opacity-80 w-[60%] tracking-[2px] leading-[35px]">
            {subTitle}
          </p>
        </ParallaxComponent>
      </div>
    </div>
  );
};

export default HeroSwiperItem;
