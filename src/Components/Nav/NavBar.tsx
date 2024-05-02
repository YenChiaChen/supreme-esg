import React from 'react';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import NavLinks from './NavLinks';
import LanguageSwitch from './LanguageSwitch';
import DownloadButton from './DownloadButton';

const links: string[] = ["點亮永續", "最新動態", "社會共榮", "幸福企業", "永續經營", "永續共生"];

const NavBar: React.FC = () => {
  return (
    <div className="container left-1/2 -translate-x-1/2 fixed top-[1rem] bg-white rounded-full z-40 shadow-xl">
      <div className="flex justify-between w-full py-4 px-8 items-center">
        <div className="flex-1 flex items-center whitespace-nowrap">
          <Logo /><span className="ml-3 font-light tracking-widest"> | 企業永續</span>
        </div>
        <NavLinks names={links} />
        <div className="flex-1 text-right font-light flex whitespace-nowrap gap-8 justify-end text-sm text-[#555555] items-center">
          <LanguageSwitch />
          <DownloadButton />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
