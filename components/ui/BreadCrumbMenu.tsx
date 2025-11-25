"use client";

import { useFetchData } from "@/store/useFetchData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";

const BreadCrumbMenu = () => {
  const locations = usePathname().split("/").filter(Boolean);

  const locationsCopy = [...locations];

  const { getSubCategory } = useFetchData();

  const lastElement = locations[locations.length - 1];

  const isString = isNaN(Number(lastElement));

  if (!isString) {
    const subCategory = getSubCategory(Number(lastElement));

    const title = subCategory?.title;

    if (!title) return;

    locationsCopy[locationsCopy.length - 1] = title;
  }

  if (locations.length > 2) {
    locationsCopy[0] = "...";
  }

  const breadCrumbMenuItem = locationsCopy.map((path, index) => {
    let slug = `/${locations.slice(0, index + 1).join("/")}`;

    if (locationsCopy.length > 2 && index === 0) {
      slug = "/dua-categories";
    }

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
        {breadCrumbMenuItem.length > 0 && <FaChevronRight />}

        {/* Dynamic routing */}
        {breadCrumbMenuItem.map((item, index) => (
          <li key={index} className="flex-center gap-1.5">
            <Link className="line-clamp-1" href={item.slug}>
              {item.pathName}
            </Link>
            {breadCrumbMenuItem.length - 1 === index ? "" : <FaChevronRight />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BreadCrumbMenu;
