interface NavLinksProps {
    names: string[];
  }
  
const NavLinks: React.FC<NavLinksProps> = ({ names }) => {
    return (
      <div className="flex-1 text-center font-light text-[#555555] text-sm flex whitespace-nowrap gap-8 justify-center">
        {names.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
    );
  }

export default NavLinks