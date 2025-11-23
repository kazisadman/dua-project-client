"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";

const BreadCrumbMenu = () => {
  const locations = usePathname().split("/").filter(Boolean);

  const breadCrumbMenuItem = locations.map((path, index) => {
    const slug = `/${locations.slice(0, index + 1).join("/")}`;

    const pathName = path
      .split("-")
      .map((name) => {
        const decode = decodeURIComponent(name);
        return decode.charAt(0).toUpperCase() + decode.slice(1);
      })
      .join(" ");

    return { pathName, slug };
  });

  return (
    <nav className="flex-center gap-1.5 page-header  content-padding">
      <div className="w-4.5 h-4.5 flex-center justify-center">
        <Image
          src={"/breadcrumb-icon.png"}
          alt="breadcrumb-icon"
          width={18}
          height={18}
          className="border"
        />
      </div>

      <ul className="flex-center gap-1.5 justify-between w-fit text-sm text-primary">
        {/* Home routing */}
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        {breadCrumbMenuItem.length > 1 && <FaChevronRight />}

        {/* Dynamic routing */}
        {breadCrumbMenuItem.map((item, index) => (
          <li key={index} className="flex-center gap-1.5">
            <Link href={item.slug}>{item.pathName}</Link>
            {breadCrumbMenuItem.length - 1 === index ? "" : <FaChevronRight />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BreadCrumbMenu;
