import { Stat } from "../../Pages/LandingPage/State";

type CardProps = {
  content: string;
  number: number;
  suffix: string;
};

const StatCard: React.FC<CardProps> = ({ number, suffix, content }) => {
  return (
    <div className="border-[1px] border-white rounded-[2rem] backdrop-blur-lg flex flex-col justify-between text-white p-8">
      <p className="text-[16px] font-light">{content}</p>
      <div className="text-5xl font-bold">
        <Stat suffix={suffix} num={number} subheading={undefined} />
      </div>
    </div>
  );
};

export default StatCard;
