"use client";

import { useUIState } from "@/store/useUIStore";
import Image from "next/image";
import Link from "next/link";
import SubCategoryAccordian from "./SubCategoryAccordian";
import { useFetchData } from "@/store/useFetchData";
import { notFound, useParams } from "next/navigation";
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

  const { category } = useParams();


  const category_slug = category_title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-");

  const { categoryAccordianId, toggleCategoryAccordian } = useUIState();

  const openAccordian = categoryAccordianId === id;

  const { getSubCategories, categories } = useFetchData();

  const matchedSubCategories = getSubCategories(categoryAccordianId);

  useEffect(() => {
    const matchedCategoryParam = categories.find(
      (item) =>
        item.category_title.toLowerCase() ===
        category?.toString().replace(/and/g, "&").replace(/-/g, " ")
    );

    if (!matchedCategoryParam) {
      notFound();
    }
  }, [categories, category]);

  return (
    <div
      className={`w-full space-y-2.5 px-4 rounded-2xl ${
        !openAccordian && "hover:bg-gray-200"
      }`}
    >
      {/* category header */}
      <Link
        onClick={() => toggleCategoryAccordian(id)}
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
