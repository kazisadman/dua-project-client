"use client";

import Image from "next/image";

interface Props {
  data: {
    id: number;
    title: string;
  };
}
const DuaContent = ({ data }: Props) => {
  const { title } = data;

  return (
    <>
      {/* dua title */}
      <div className="flex gap-2.5 cursor-pointer">
        <div className="flex w-8 h-6">
          <Image
            src={"/category/dua-arrow.png"}
            alt="arrow"
            width={24}
            height={24}
          />
        </div>
        <p className={`py-1.5 font-medium`}>
          {title}
        </p>
      </div>
    </>
  );
};

export default DuaContent;
