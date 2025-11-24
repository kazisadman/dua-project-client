"use client";
import { useUIState } from "@/store/useUIStore";
import DuaCard from "./DuaCard";
import Link from "next/link";
import { useFetchData } from "@/store/useFetchData";

interface Props {
  data: {
    id: number;
    title: string;
    category_title: string;
  };
}

const SubCategoryContent = ({ data }: Props) => {

  const { id, title, category_title } = data;

  const { getDuas } = useFetchData();

  const matchedDuas = getDuas(id);

  return (
    <>
      <div className="page-header  content-padding py-5.5">
        <h2 className="font-semibold text-sm text-primary">
          <Link href={`/dua-categories/${category_title}/${id}`}>
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
