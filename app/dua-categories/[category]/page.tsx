import ContentPanel from "@/components/content/ContentPanel";
import { notFound } from "next/navigation";

interface Category {
  id: number;
  category_title: string;
  icon: string;
  total_subcategories: string;
  total_duas: string;
  subcategories_id: number[];
}

const page = async ({ params }: { params: { category: string } }) => {
  try {
    const { category } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`);


    const data = await res.json();

    const exists = data.some(
      (item: Category) =>
        item.category_title
          .toLowerCase()
          .replace(/&/g, "and")
          .replace(/\s+/g, "-") === category
    );

    if (!exists) return notFound();
  } catch (error) {
    throw error;
  }

  return (
    <div>
      <ContentPanel />
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`);

    const data = await res.json();
    const slugs = data.map((item: Category) => {
      const formatted = item.category_title
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/\s+/g, "-");
      return formatted;
    });

    return slugs.map((slug: string) => ({
      category: slug,
    }));
  } catch (error) {
    throw error;
  }
}
