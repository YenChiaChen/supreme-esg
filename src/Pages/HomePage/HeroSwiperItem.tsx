import { CSSProperties } from "react";

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
      <div className="h-[70svh]" style={heroStyle}>
        <div className="flex flex-col justify-center pt-[15%]  h-full container mx-auto text-white">
          <h1 className="text-6xl font-bold tracking-[8px] w-fit">
            {title}
          </h1>
          <p className="text-xl mt-8 opacity-80 w-[60%] tracking-[2px] leading-[35px]">
            {subTitle}
          </p>
        </div>
      </div>
  );
};

export default HeroSwiperItem;
