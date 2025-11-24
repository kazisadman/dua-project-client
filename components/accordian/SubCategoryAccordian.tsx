import { useUIState } from "@/store/useUIStore";
import DuaContent from "../category panel/DuaContent";
import { useFetchData } from "@/store/useFetchData";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Props {
  data: {
    id: number;
    title: string;
    category_id: number;
    duas_id: number[];
    category_title: string;
  };
}

const SubCategoryAccordian = ({ data }: Props) => {
  const { id, title, category_title } = data;

  const params = useParams();
  const subCategory = params["sub-category"];

  const {
    subCategoryAccordianId,
    toggleSubCategoryAccordian,
    setSubCategoryRefId,
  } = useUIState();

  const openAccordian = subCategoryAccordianId === id;

  const { getDuas } = useFetchData();

  const matchedDuas = getDuas(subCategoryAccordianId);

  const categorySlug = category_title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/&/g, "and");

  return (
    <div onClick={() => setSubCategoryRefId(id)} className="pl-6">
      {subCategory ? (
        <Link
          href={`/dua-categories/${categorySlug}/${id}`}
          onClick={() => toggleSubCategoryAccordian(id)}
          className={`relative pb-3 pl-2 font-semibold cursor-pointer ${openAccordian && "text-primary"}`}
        >
          {title}
          <span className="absolute top-0 text-gray-300 -left-6">---</span>
        </Link>
      ) : (
        <div
          onClick={() => toggleSubCategoryAccordian(id)}
          className={`relative pb-3 pl-2 font-semibold cursor-pointer ${openAccordian && "text-primary"}`}
        >
          {title}
          <span className="absolute top-0 text-gray-300 -left-6">---</span>
        </div>
      )}

      {/* dua container */}
      {openAccordian ? (
        <div className={`w-full h-full space-y-3`}>
          {matchedDuas?.map((item) => (
            <DuaContent key={item.id} data={item} />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SubCategoryAccordian;
