"use client";

import { useUIState } from "@/store/useUIStore";
import SubCategoryContent from "./SubCategoryContent";
import { useFetchData } from "@/store/useFetchData";
import { useEffect } from "react";

const ContentPanel = () => {
  const { categoryAccordianId,subCategoryRefId } = useUIState();
  const { getSubCategories, getCategory } = useFetchData();


  const matchedSubCategories = getSubCategories(categoryAccordianId);

  const category = getCategory(categoryAccordianId);

  useEffect(() => {
    document.getElementById(subCategoryRefId.toString())?.scrollIntoView({behavior:"smooth",block:"start"});
  }, [subCategoryRefId]);

  return (
    <section>
      {/* category */}
      <div className="page-header content-padding py-5.5">
        <h1 className="font-semibold text-primary">
          Category:{" "}
          <span className="font-normal">{category?.category_title}</span>
        </h1>
      </div>

      {/* sub-category */}
      {matchedSubCategories.map((item) => (
        <SubCategoryContent key={item.id} data={item} />
      ))}
    </section>
  );
};

export default ContentPanel;
