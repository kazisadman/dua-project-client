"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";

const BreadCrumbMenu = () => {
  const location = usePathname().split("/").filter(Boolean);
  const pathName = location.map((name) => name.split("-").join(" "));

  const pathNameFormatted = pathName.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  });

  const formattedPath = ["Home", ...pathNameFormatted];

  return (
    <div>
      <div className="flex-center gap-1.5 bg-breadcrumb-bg px-4 md:px-6 lg:px-8.5">
        <div className="w-4.5 h-4.5 flex-center justify-center">
          <Image
            src={"/breadcrumb-icon.png"}
            alt="breadcrumb-icon"
            width={18}
            height={18}
            className="border"
          />
        </div>
        <ul className="flex-center gap-1.5 justify-between w-fit py-3.5 text-sm text-primary">
          {formattedPath.map((name, index) => (
            <li
              className={`flex-center gap-1.5 ${formattedPath.length - 1 == index && "font-bold"}`}
              key={index}
            >
              {name}
              {formattedPath.length - 1 == index ? (
                ""
              ) : (
                <span>
                  <FaChevronRight />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumbMenu;
