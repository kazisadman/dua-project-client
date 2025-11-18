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
  
  return (
    <div className="flex justify-center items-center h-[60px] w-full px-2 bg-backgound border">
      <ul className="flex justify-evenly items-center w-full gap-6">
        {navLinks.map((link, index) => (
          <li className="p-2.25 bg-icon-bg rounded-lg" key={index}>
            <Link href={`${link.slug}`}>
              <Image src={link.icon} alt="sidebar-nav-icon" width={22} height={22}/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
