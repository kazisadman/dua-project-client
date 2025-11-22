"use client";

import { useUIState } from "@/store/useUIStore";
import SubCategoryContent from "./SubCategoryContent";
import { useEffect } from "react";

const ContentPanel = () => {
  const { subCategoryRefId } = useUIState();

  useEffect(() => {
    document.getElementById(subCategoryRefId)?.scrollIntoView({behavior:"smooth",block:"start"});
  }, [subCategoryRefId]);

  return (
    <section>
      {/* category */}
      <div className="page-header content-padding py-5.5">
        <h1 className="font-semibold text-primary">
          Category: <span className="font-normal">Dua&apos;s Importance</span>
        </h1>
      </div>

      {/* sub-category */}
      <SubCategoryContent id="11" />
      <SubCategoryContent id="12" />
      <SubCategoryContent id="13" />
    </section>
  );
};

export default ContentPanel;
