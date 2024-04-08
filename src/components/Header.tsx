import logo from "../assets/logo.png";
import title from "../assets/logo-title.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex mt-14 sm:mt-0 px-5 sm:px-[10%] sm:py-5 py-2 justify-between items-center">
      <div className="flex gap-2">
        <img className="h-[24px]" src={logo} alt="logo" />
        <img className="h-[24px]" src={title} alt="title" />
      </div>
      <div className="sm:flex gap-5 hidden">
        <ul className="flex gap-9 text-[16px] items-center">
          <li className="flex gap-2 items-center">
            <span className="p-1 px-2 bg-yellow-500 text-sm text-white rounded-md">
              Free
            </span>
            <span>AI Tools</span>
          </li>
          <li>Project</li>
          <li>Resources</li>
          <li>Pricing</li>
          <li>Contact Us</li>
        </ul>
        <button className="bg-black text-white font-medium py-[.6rem] px-[.8rem] rounded-lg">
          join the waitlist
        </button>
      </div>
      <div className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <GiHamburgerMenu size={30} />
      </div>
      {isMenuOpen && (
        <div className="flex flex-col gap-5 text-center absolute top-20 right-5 bg-slate-100 p-5 rounded-md z-10">
          <ul className="flex flex-col gap-5 text-[16px] items-center">
            <li className="flex gap-2 items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="p-1 px-2 bg-yellow-500 text-sm text-white rounded-md">
                Free
              </span>
              <span>AI Tools</span>
            </li>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>project</li>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>Resources</li>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>Pricing</li>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>Contact Us</li>
          </ul>
          <button className="bg-black text-white font-medium py-[.6rem] px-[.8rem] rounded-lg">
            join the waitlist
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
