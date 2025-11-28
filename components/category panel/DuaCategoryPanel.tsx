"use client";

import { CiSearch } from "react-icons/ci";
import AsidePanelHeader from "../ui/AsidePanelHeader";
import { useUIState } from "@/store/useUIStore";
import CategoryAccordian from "../accordian/CategoryAccordian";
import { useFetchData } from "@/store/useFetchData";
import { useEffect, useState } from "react";

interface Category {
  id: number;
  category_title: string;
  icon: string;
  total_subcategories: string;
  total_duas: string;
  subcategories_id: number[];
}

const DuaCategoryPanel = () => {
  const { toggleCategoryPanel } = useUIState();
  const { categories } = useFetchData();

  const [searchedCategories, setSearchCategories] = useState<Category[]>([]);

  const [query, setQuery] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setQuery(value);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      if (query) {
        fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/categories/search?query=${query}`
        )
          .then((result) => result.json())
          .then((data) => setSearchCategories(data));
      }
    }, 300);

    return () => clearTimeout(delay);
  }, [query]);
  return (
    <section
      className={`lg:sticky lg:top-0 aside-container category overflow-y-auto space-y-5 py-0 category-scrollbar`}
    >
      <div className="lg:hidden">
        <AsidePanelHeader
          image="/logo.png"
          title="Dua & Rukyah"
          subtitle="Hisnul Muslim"
          toggleFn={toggleCategoryPanel}
        />
      </div>

      {/* search bar */}
      <div className="lg:sticky lg:top-0 bg-white z-50 pt-0 lg:pt-4">
        <div className=" gap-4 px-4.5 py-3 bg-gray-100 rounded-full flex-center">
          <CiSearch className="text-2xl" />
          <input
            className="w-full font-normal outline-none focus:outline-none"
            type="text"
            placeholder="Search by Category"
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* category panel */}
      {query && searchedCategories.length === 0 && (
        <div className="text-center py-5">No category found</div>
      )}

      <div className="space-y-5 relative z-0">
        {query
          ? searchedCategories.map((item) => (
              <CategoryAccordian key={item.id} data={item} />
            ))
          : categories.map((item) => (
              <CategoryAccordian key={item.id} data={item} />
            ))}
      </div>
    </section>
  );
};

export default DuaCategoryPanel;
