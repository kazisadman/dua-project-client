import Image from "next/image";
import { CiSearch } from "react-icons/ci";

const DuaCategoryPanel = () => {
  return (
    <section className="h-full w-77 aside-container space-y-2.5">
      {/* search bar */}
      <div className="gap-4 px-4.5 py-3 bg-gray-100 rounded-full flex-center">
        <CiSearch className="text-2xl" />
        <input
          className="w-full font-normal outline-none focus:outline-none"
          type="text"
          placeholder="Search by Category"
        />
      </div>

      {/* category panel */}

      <div className="w-full py-3.5 pl-2.5 space-y-2.5">
        {/* category header */}
        <div className="w-full flex-center gap-2.5">
          <div className="justify-center rounded-full flex-center w-11 h-11 bg-category-icon">
            <Image
              src={"/category/group.png"}
              alt="category-icon"
              width={32}
              height={32}
              className="object-contain w-8 h-8"
            />
          </div>
          <div className="space-y-1">
            <p className="font-medium">Dua&apos;s Importsance</p>
            <p className="font-normal text-subcategory-text">
              7 Subcategories | 50 Duas
            </p>
          </div>
        </div>

        {/* sub category title */}
        <div className="w-full pl-4">
          <div className=" space-y-2.5 py-2.5 border-gray-300 border-dashed border-l">
            <div className="pl-6">
              <p className="relative pl-2 font-semibold text-primary">
                The Servant is dependent on his Lord
                <span className="absolute top-0 text-gray-300 -left-6">
                  ---
                </span>
              </p>
              {/* dua container */}
              <div className="w-full h-full space-y-3">
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
                  <p className="py-1.5 font-medium">
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
                  <p className="py-1.5 font-medium">
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
                  <p className="py-1.5 font-medium">
                    4. Allah&apos;s guidance #1
                  </p>
                </div>
              </div>
            </div>
            <div className="pl-6">
              <p className="relative">
                The Servant is dependent on his Lord
                <span className="absolute top-0 text-gray-300 -left-6">
                  ---
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DuaCategoryPanel;
