"use client";

import { CiSearch } from "react-icons/ci";
import AsidePanelHeader from "../ui/AsidePanelHeader";
import { useUIState } from "@/store/useUIStore";
import CategoryAccordian from "../accordian/CategoryAccordian";
import { useFetchData } from "@/store/useFetchData";

const DuaCategoryPanel = () => {
  const { toggleCategoryPanel } = useUIState();
  const { categories} = useFetchData();

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
          />
        </div>
      </div>

      {/* category panel */}
      <div className="space-y-5 relative z-0">
        {categories?.map((item) => (
          <CategoryAccordian key={item.id} data={item}/>
        ))}
      </div>
    </section>
  );
};

export default DuaCategoryPanel;
