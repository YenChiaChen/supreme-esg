type NewsSwiperItemProps = {
  image: string;
  title: string;
  content: string;
  comp1: string;
  comp2: string;
  compTitle: string;
  url: string;
};

const NewsSwiperItem: React.FC<NewsSwiperItemProps> = ({
  image,
  title,
  content,
  comp1,
  comp2,
  compTitle,
  url,
}) => {
  return (
    <div className="mt-24">
      <div className="relative">
        <img
          src={image}
          alt="event01"
          className="aspect-[25/12] object-cover rounded-[3rem] w-[75%]"
        />
        <div
          className="absolute right-[0%] -bottom-[5%] bg-[#D9F2F3] p-8 rounded-[1rem] w-[30%]"
        >
          <p className="font-bold text-xl  tracking-[2px]">
            {comp1} × <br />
            {comp2}
          </p>
          <p className="text-sm mt-2  tracking-[2px]">{compTitle}</p>
        </div>
      </div>
      <div className="col-span-3 mt-16">
        <p className="text-[#ED6B2C] font-semibold text-[25px] tracking-[2px]">
          {title}
        </p>
        <p className="mt-6 text-[16px] font-light tracking-[1px] leading-[30px]">
          {content}
        </p>
        <div className="text-center mt-8 pb-12">
          <button className="text-[16px] border-[1px] rounded-full border-[#ED6B2C] text-[#ED6B2C] py-2 px-6 duration-300 hover:text-white hover:bg-[#ED6B2C] hover:scale-[1.1]">
            查看更多
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsSwiperItem;
