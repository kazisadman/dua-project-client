import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-16 px-4 shadow-sm bg-backgound md:px-6">
      <div className="flex items-center md:items-start gap-2.5 leading-4">
        {/* menu - mobile view */}
        <div>
          <button className="w-9.5 h-9.5 flex justify-center items-center bg-navbar-icon rounded-full">
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
          <p className="text-[10px] font-semibold text-text hidden md:block">Hisnul Muslim</p>
        </div>
      </div>

      {/* search and swatch button */}
      <div className="flex items-center gap-4">
        <button className="w-9.5 h-9.5 flex justify-center items-center bg-navbar-icon rounded-full">
          <Image
            src={"/navbar/search-icon.png"}
            alt="search-icon"
            width={18}
            height={18}
          />
          <span className="sr-only">search</span>
        </button>
        <button className="w-9.5 h-9.5 flex justify-center items-center bg-navbar-icon rounded-full">
          <Image
            src={"/navbar/color-swatch-icon.png"}
            alt="menu-icon"
            width={18}
            height={18}
          />
          <span className="sr-only">color swatch</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
