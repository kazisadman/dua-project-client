import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const navLinks = [
    {
      name: "Category",
      slug: "/dua-categories",
      icon: "/sidebar/icon-1.png",
    },
    {
      name: "Home",
      slug: "/",
      icon: "/sidebar/icon-2.png",
    },
    {
      name: "Bookmarks",
      slug: "/",
      icon: "/sidebar/icon-3.png",
    },
    {
      name: "Dua",
      slug: "/",
      icon: "/sidebar/icon-4.png",
    },
    {
      name: "Ruqyah",
      slug: "/",
      icon: "/sidebar/icon-5.png",
    },
    {
      name: "Idea",
      slug: "/",
      icon: "/sidebar/icon-6.png",
    },
  ];

  const footerLink = [
    {
      name: "Challenges",
      slug: "/",
      icon: "/sidebar/footer-1.png",
    },
    {
      name: "Menu",
      slug: "/",
      icon: "/sidebar/footer-2.png",
    },
  ];

  return (
    <div className="flex justify-center items-center h-[60px] w-full px-2 bg-sidebar-bg fixed bottom-0 lg:w-17 lg:h-full lg:flex-col lg:justify-between lg:py-2">
      {/* logo */}
      <div className="hidden lg:block">
        <Image src={"/logo.png"} alt="logo" width={44} height={44} />
      </div>

      {/* sidebar nav links */}

      <ul className="flex items-center w-full gap-6 justify-evenly md:justify-center md:w-fit lg:flex-col">
        {navLinks.map((link, index) => (
          <li
            className={`w-10 h-10 flex justify-center items-center  rounded-lg ${
              link.name === "Category" && "active"
            }`}
            key={index}
          >
            <Link href={`${link.slug}`}>
              <Image
                src={link.icon}
                alt="sidebar-nav-icon"
                width={22}
                height={22}
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* footer */}
      <div className="hidden lg:block">
        <ul>
          {footerLink.map((link, index) => (
            <li
              className={`w-10 h-10 flex justify-center items-center  rounded-lg ${
                link.name === "Category" && "active"
              }`}
              key={index}
            >
              <Link href={`${link.slug}`}>
                <Image
                  src={link.icon}
                  alt="sidebar-nav-icon"
                  width={22}
                  height={22}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
