"use client";

import { useUIState } from "@/store/useUIStore";
import Image from "next/image";
import Link from "next/link";
import SubCategoryAccordian from "./SubCategoryAccordian";
import { useFetchData } from "@/store/useFetchData";
import { useParams } from "next/navigation";
import { useEffect } from "react";

interface Props {
  data: {
    id: number;
    icon: string;
    category_title: string;
    total_subCategories: string;
    total_duas: string;
    subcategories_id: number[];
  };
}

const CategoryAccordian = ({ data }: Props) => {
  const { id, icon, category_title, total_duas, total_subCategories } = data;

  const { getSubCategories, categories } = useFetchData();

  const {
    categoryAccordianId,
    toggleCategoryAccordian,
    setSubCategoryRefId,
    toggleSubCategoryAccordian,
  } = useUIState();

  const { category } = useParams();

  // set category id according to dynamic route

  useEffect(() => {
    const matchedCategory = categories.find(
      (item) =>
        item.category_title.toLocaleLowerCase() ===
        category?.toString().replace(/and/g, "&").replace(/-/g, " ")
    );

    if (!matchedCategory) return;

    toggleCategoryAccordian(matchedCategory.id);

    const firstElement = matchedCategory.subcategories_id[0];

    setSubCategoryRefId(firstElement);
    toggleSubCategoryAccordian(firstElement);
  }, [
    categories,
    category,
    toggleCategoryAccordian,
    setSubCategoryRefId,
    toggleSubCategoryAccordian,
  ]);

  // convert category title into slug form
  const category_slug = category_title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-");

  const openAccordian = categoryAccordianId === id;

  const matchedSubCategories = getSubCategories(categoryAccordianId);

  return (
    <div
      className={`w-full space-y-2.5 px-4 rounded-2xl ${
        !openAccordian && "hover:bg-gray-200"
      }`}
    >
      {/* category header */}
      <Link
        href={`/dua-categories/${category_slug}`}
        className="w-full flex-center gap-2.5"
      >
        <div className="justify-center rounded-xl flex-center w-11 h-11 bg-category-icon">
          <Image
            src={icon}
            alt="category-icon"
            width={32}
            height={32}
            className="object-contain w-8 h-8"
          />
        </div>
        <div className="space-y-1">
          <p className="font-medium">{category_title}</p>
          <p className="text-xs font-normal text-subcategory-text">
            {total_subCategories} Subcategories | {total_duas} Duas
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
          {matchedSubCategories.map((item) => (
            <SubCategoryAccordian key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryAccordian;
