import { notFound } from "next/navigation";
import SubCategoryPageWrapper from "./SubCategoryPageWrapper";

interface SubCategory {
  id: number;
  category_id: number;
  title: string;
  dua_id: number[];
  category_title: string;
}

const page = async ({
  params,
}: {
  params: { category: string; "sub-category": string };
}) => {
  const { category, "sub-category": subCategory } = await params;

  const subCategoryRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SUBCATEGORY_BIN_ID}`,
    {
      headers: {
        "X-Master-Key": `${process.env.NEXT_PUBLIC_X_MASTER_KEY}`,
      },
    }
  );

  const formatted = await subCategoryRes.json();

  const subCategoryData = formatted.record;

  const exists = subCategoryData.some((item: SubCategory) => {
    const categorySlug = item.category_title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/\s+/g, "-");

    const subCategorySlug = item.id.toString();

    return categorySlug === category && subCategorySlug === subCategory;
  });

  if (!exists) {
    return notFound();
  }

  return (
    <div>
      <SubCategoryPageWrapper />
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  const subCategoryRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SUBCATEGORY_BIN_ID}`,
    {
      headers: {
        "X-Master-Key": `${process.env.NEXT_PUBLIC_X_MASTER_KEY}`,
      },
    }
  );

  const subCategoryData = await subCategoryRes.json();

  const subCategorySlugs = subCategoryData.record.map((item: SubCategory) => {
    const category = item.category_title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/\s+/g, "-");

    const subCategory = item.id.toString();

    return {
      category,
      "sub-category": subCategory,
    };
  });

  return subCategorySlugs;
}
