"use client";

import SubCategoryContent from "@/components/content/SubCategoryContent";
import { useFetchData } from "@/store/useFetchData";
import { useParams } from "next/navigation";

const SubCategoryPageWrapper = () => {
  const params = useParams();
  
  const subCategoryId = params["sub-category"];

  const { getSubCategory } = useFetchData();

  const data = getSubCategory(Number(subCategoryId));

  if (!data) return;

  return <div>{<SubCategoryContent data={data} />}</div>;
};

export default SubCategoryPageWrapper;
