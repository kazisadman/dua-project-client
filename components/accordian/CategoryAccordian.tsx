"use client";

import { useUIState } from "@/store/useUIStore";
import Image from "next/image";
import Link from "next/link";
import SubCategoryAccordian from "./SubCategoryAccordian";

interface props {
  id: string;
}

const CategoryAccordian = ({ id }: props) => {
  const { categoryAccordianId, toggleCategoryAccordian } = useUIState();

  const openAccordian = categoryAccordianId === id;

  return (
    <div className="w-full space-y-2.5 px-4">
      {/* category header */}
      <Link
        onClick={() => toggleCategoryAccordian(id)}
        href={"/dua-categories/duas-importance"}
        className="w-full flex-center gap-2.5"
      >
        <div className="justify-center rounded-full flex-center w-11 h-11 bg-category-icon">
          <Image
            src={"/category/group.png"}
            alt="category-icon"
            width={32}
            height={32}
            className="object-contain w-8 h-8"
          />
        </div>
        <div className="space-y-1">
          <p className="font-medium">Dua&apos;s Importsance</p>
          <p className="text-xs font-normal text-subcategory-text">
            7 Subcategories | 50 Duas
          </p>
        </div>
      </Link>

      {/* sub category title */}
      <div
        className={`w-full pl-3 overflow-hidden transition-all duration-300 ${openAccordian ? "max-h-full opacity-100" : "h-0 opacity-0"}`}
      >
        <div
          className={`space-y-2.5 py-2.5 border-gray-300 border-dashed border-l`}
        >
          <SubCategoryAccordian id="1" />
          <SubCategoryAccordian id="2" />
        </div>
      </div>
      {/* {openAccordian ? (
      ) : (
        ""
      )} */}
    </div>
  );
};

export default CategoryAccordian;
