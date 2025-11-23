"use client";
import { useUIState } from "@/store/useUIStore";
import Image from "next/image";

interface Props {
  data: {
    id: number;
    title: string;
  };
}
const DuaContent = ({ data }: Props) => {
  const { setDuaRefId, duaRefId } = useUIState();

  const { id, title } = data;

  const selected = duaRefId === id;
  return (
    <>
      {/* dua title */}
      <div
        onClick={() => setDuaRefId(id)}
        className="flex gap-2.5 cursor-pointer"
      >
        <div className="flex w-6 h-6">
          <Image
            src={"/category/dua-arrow.png"}
            alt="arrow"
            width={24}
            height={24}
          />
        </div>
        <p className={`py-1.5 font-medium ${selected && "text-primary"}`}>
          {title}
        </p>
      </div>
    </>
  );
};

export default DuaContent;
