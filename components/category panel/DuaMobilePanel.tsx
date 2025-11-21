"use client";
import { useUIState } from "@/store/useUIStore";
import DuaCategoryPanel from "./DuaCategoryPanel";

const DuaMobilePanel = () => {
  const { isCategoryPanelOpen, toggleCategoryPanel } = useUIState();

  return (
    <>
      <div
        className={`category-mobile ${isCategoryPanelOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <DuaCategoryPanel />
      </div>
      <div
        onClick={toggleCategoryPanel}
        className={`fixed inset-0 z-0 bg-black opacity-10 lg:hidden ${isCategoryPanelOpen ? "block" : "hidden"}`}
      />
    </>
  );
};

export default DuaMobilePanel;
