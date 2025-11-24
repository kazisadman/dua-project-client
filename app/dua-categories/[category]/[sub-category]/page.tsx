import SubCategoryPageWrapper from "./SubCategoryPageWrapper";

interface SubCategory {
  id: number;
  category_id: number;
  title: string;
  duas_id: number[];
  category_title: string;
}

const page = () => {
  return (
    <div>
      <SubCategoryPageWrapper />
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  const subCategoryRes = await fetch(
    `https://api.jsonbin.io/v3/b/${process.env.NEXT_PUBLIC_SUBCATEGORY_BIN_ID}`,
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
