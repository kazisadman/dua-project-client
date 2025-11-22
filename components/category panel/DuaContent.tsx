"use client";
import { useUIState } from "@/store/useUIStore";
import Image from "next/image";

interface props {
  id: string;
}
const DuaContent = ({ id }: props) => {
  const { setDuaRefId,duaRefId } = useUIState();

  const selected = duaRefId === id
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
          4. Allah&apos;s guidance #1
        </p>
      </div>
    </>
  );
};

export default DuaContent;
