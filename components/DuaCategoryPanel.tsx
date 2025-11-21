"use client";

import { CiSearch } from "react-icons/ci";
import AsidePanelHeader from "./AsidePanelHeader";
import { useUIState } from "@/store/useUIStore";
import CategoryAccordian from "./CategoryAccordian";

const DuaCategoryPanel = () => {
  const { toggleCategoryPanel } = useUIState();

  return (
    <section
      className={`lg:sticky lg:top-16.25 aside-container category overflow-y-auto space-y-5 category-scrollbar`}
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
      <div className="gap-4 px-4.5 py-3 bg-gray-100 rounded-full flex-center">
        <CiSearch className="text-2xl" />
        <input
          className="w-full font-normal outline-none focus:outline-none"
          type="text"
          placeholder="Search by Category"
        />
      </div>

      {/* category panel */}
      <div className="space-y-5">
        <CategoryAccordian id={"1"} />
        <CategoryAccordian id={"2"} />
        <CategoryAccordian id={"3"} />
        <CategoryAccordian id={"4"} />
        <CategoryAccordian id={"5"} />
        <CategoryAccordian id={"6"} />
        <CategoryAccordian id={"7"} />
        <CategoryAccordian id={"2"} />
        <CategoryAccordian id={"2"} />
        <CategoryAccordian id={"2"} />
        <CategoryAccordian id={"2"} />
        <CategoryAccordian id={"2"} />
        <CategoryAccordian id={"2"} />
      </div>
    </section>
  );
};

export default DuaCategoryPanel;
