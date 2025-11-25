"use client";

import { CiSearch } from "react-icons/ci";
import BreadCrumbMenu from "./ui/BreadCrumbMenu";
import { useFetchData } from "@/store/useFetchData";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  const { categories } = useFetchData();

  return (
    <div className="">
      <BreadCrumbMenu />
      <div className="">
        <div className="flex-center justify-between px-3 bg-breadcrumb-bg ">
          {/* title */}
          <div className="hidden md:block">
            <h1 className="text-xl font-bold">Category of Dua</h1>
          </div>

          {/* search bar */}
          <div className="lg:sticky lg:top-0  z-50 py-5 lg:pt-4 w-full md:w-1/3">
            <div className=" gap-4 px-4.5 py-3 bg-white rounded-full flex-center">
              <CiSearch className="text-2xl" />
              <input
                className="w-full font-normal outline-none focus:outline-none"
                type="text"
                placeholder="Search by Category"
              />
            </div>
          </div>
        </div>

        {/* category panel */}
        <div className="py-5">
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 rounded-2xl">
            {categories?.map((item) => (
              <Link
                key={item.id}
                href={`/dua-categories/${item.category_title
                  .toLowerCase()
                  .replace(/&/g, "and")
                  .replace(/\s+/g, "-")}`}
                className="w-full flex-center gap-2.5 border border-gray-300 p-4 rounded-2xl hover:bg-gray-200"
              >
                <div className="justify-center rounded-xl flex-center w-12 h-12 bg-category-icon">
                  <Image
                    src={item.icon}
                    alt="category-icon"
                    width={32}
                    height={32}
                    className="object-contain w-8 h-8"
                  />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">{item.category_title}</p>
                  <p className="text-xs font-normal text-subcategory-text">
                    {item.total_subCategories} Subcategories | {item.total_duas}{" "}
                    Duas
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
