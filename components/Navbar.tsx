"use client";

import { useUIState } from "@/store/useUIStore";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const { toggleSettings,toggleCategoryPanel } = useUIState();

  return (
    <nav className="navbar">
      <div className="flex-center md:items-start gap-2.5 leading-4">
        {/* menu - mobile view */}
        <div onClick={toggleCategoryPanel} className="lg:hidden">
          <button className="rounded-full navbar-icon">
            <Image
              src={"/sidebar/footer-2.png"}
              alt="menu-icon"
              width={18}
              height={18}
            />
            <span className="sr-only">menu</span>
          </button>
        </div>

        {/* logo */}
        <div className="text-left">
          <p className="text-base font-bold text-text">
            Dua <span className="font-normal text-primary">&</span> Ruqyah
          </p>
          <p className="text-[10px] font-semibold text-text hidden md:block">
            Hisnul Muslim
          </p>
        </div>
      </div>

      {/* search and swatch button */}
      <div className="gap-4 flex-center">
        <button className="rounded-full navbar-icon">
          <Image
            src={"/navbar/search-icon.png"}
            alt="search-icon"
            width={18}
            height={18}
          />
          <span className="sr-only">search</span>
        </button>
        <button
          onClick={toggleSettings}
          className="rounded-full 2xl:hidden navbar-icon"
        >
          <Image
            src={"/navbar/color-swatch-icon.png"}
            alt="menu-icon"
            width={18}
            height={18}
          />
          <span className="sr-only">color swatch</span>
        </button>
        <button className="lg:flex items-center gap-2 bg-navbar-icon py-2.5 px-3.5 rounded-4xl show-lg">
          <Image src={"/navbar/flag.png"} alt="flag" width={24} height={18} />
          <span className="text-sm font-normal">En</span>
          <FaChevronDown className="text-sm" />
        </button>
        <button className="bg-[#417360] lg:flex items-center gap-2 py-2.5 px-3.5 rounded-4xl text-white show-lg">
          <span className="text-sm font-medium">Support Us</span>
          <Image
            src={"/navbar/direct-right.png"}
            alt="arrow"
            width={18}
            height={18}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
