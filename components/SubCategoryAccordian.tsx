import { useUIState } from "@/store/useUIStore";
import Image from "next/image";
import { useState } from "react";

interface props {
  id: string;
}

const SubCategoryAccordian = ({ id }: props) => {
  const { subCategoryAccordianId, toggleSubCategoryAccordian } = useUIState();

  const openAccordian = subCategoryAccordianId === id;

  return (
    <div className="pl-6">
      <p
        onClick={() => toggleSubCategoryAccordian(id)}
        className="relative pb-3 pl-2 font-semibold cursor-pointer text-primary"
      >
        The Servant is dependent on his Lord
        <span className="absolute top-0 text-gray-300 -left-6">---</span>
      </p>
      {/* dua container */}
      {openAccordian ? (
        <div className={`w-full h-full space-y-3`}>
          {/* dua title */}
          <div className="flex gap-2.5 cursor-pointer">
            <div className="flex w-6 h-6">
              <Image
                src={"/category/dua-arrow.png"}
                alt="arrow"
                width={24}
                height={24}
              />
            </div>
            <p className="py-1.5 font-medium text-primary">
              4. Allah&apos;s guidance #1
            </p>
          </div>
          {/* dua title */}
          <div className="flex gap-2.5">
            <div className="flex w-6 h-6">
              <Image
                src={"/category/dua-arrow.png"}
                alt="arrow"
                width={24}
                height={24}
              />
            </div>
            <p className="py-1.5 font-medium">4. Allah&apos;s guidance #1</p>
          </div>
          {/* dua title */}
          <div className="flex gap-2.5">
            <div className="flex w-6 h-6">
              <Image
                src={"/category/dua-arrow.png"}
                alt="arrow"
                width={24}
                height={24}
              />
            </div>
            <p className="py-1.5 font-medium">4. Allah&apos;s guidance #1</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SubCategoryAccordian;
