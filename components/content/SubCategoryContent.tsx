"use client";
import DuaCard from "./DuaCard";
import Link from "next/link";
import { useFetchData } from "@/store/useFetchData";
import { useParams } from "next/navigation";
import { useUIState } from "@/store/useUIStore";

interface Props {
  data: {
    id: number;
    title: string;
    category_title: string;
  };
}

const SubCategoryContent = ({ data }: Props) => {
  const { category } = useParams();

  const { toggleSubCategoryAccordian } = useUIState();

  const { id, title } = data;

  const { getDuas } = useFetchData();

  const matchedDuas = getDuas(id);


  return (
    <>
      <div id={id.toString()} className="page-header  content-padding py-5.5">
        <h2 className="font-semibold text-sm text-primary">
          <Link
            onClick={() => toggleSubCategoryAccordian(id)}
            href={`/dua-categories/${category}/${id}`}
          >
            Section: <span className="font-normal text-text">{title}</span>
          </Link>
        </h2>
      </div>
      <div>
        {matchedDuas.map((item, index) => (
          <DuaCard key={item.id} data={item} index={index + 1} />
        ))}
      </div>
    </>
  );
};

export default SubCategoryContent;
