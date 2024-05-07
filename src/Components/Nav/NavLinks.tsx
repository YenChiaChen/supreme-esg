
interface NavLinksProps {
  names: string[];
}

const NavLinks: React.FC<NavLinksProps> = ({ names }) => {
  return (
    <div className="flex-1 text-center font-light text-[#555555] text-[14px] flex whitespace-nowrap gap-8 justify-center">
      {names.map((name, index) => (
          <p
            key={index}
            className="border-b-[2px] border-b-transparent hover:border-b-[#FF8D50] py-2 duration-300 cursor-pointer"
          >
            {name}
          </p>
      ))}
    </div>
  );
};

export default NavLinks;
