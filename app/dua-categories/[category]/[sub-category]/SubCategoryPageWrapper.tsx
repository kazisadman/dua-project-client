"use client"

import SubCategoryContent from "@/components/content/SubCategoryContent";
import { useFetchData } from "@/store/useFetchData";
import { useUIState } from "@/store/useUIStore";

const SubCategoryPageWrapper
 = () => {
  const { categoryAccordianId } = useUIState();

  const {  getSubCategories  } = useFetchData();

  const matchedSubCategories = getSubCategories(categoryAccordianId);


  return (
    <div>
      {matchedSubCategories.map((item) => (
        <SubCategoryContent key={item.id} data={item} />
      ))}
    </div>
  );
};

export default SubCategoryPageWrapper
;
