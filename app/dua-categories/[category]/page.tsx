import ContentPanel from "@/components/content/ContentPanel";
import Loader from "@/components/ui/Loader";

interface Category {
  id: number;
  category_title: string;
  icon: string;
  total_subCategories: string;
  total_duas: string;
  subcategories_id: number[];
}

const page = async () => {
  return (
    <div>
      <Loader />
      <ContentPanel />
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  const res = await fetch(
    `https://api.jsonbin.io/v3/b/${process.env.NEXT_PUBLIC_CATEGORY_BIN_ID}`,
    {
      headers: {
        "X-Master-Key": `${process.env.NEXT_PUBLIC_X_MASTER_KEY}`,
      },
    }
  );

  const data = await res.json();

  const slugs = data.record.map((item: Category) => {
    const formatted = item.category_title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/\s+/g, "-");
    return formatted;
  });

  return slugs.map((slug: string) => ({
    category: slug,
  }));
}
