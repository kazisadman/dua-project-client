import { useUIState } from "@/store/useUIStore";
import DuaContent from "../category panel/DuaContent";

interface props {
  id: string;
}

const SubCategoryAccordian = ({ id }: props) => {
  const {
    subCategoryAccordianId,
    toggleSubCategoryAccordian,
    setSubCategoryRefId,
  } = useUIState();

  const openAccordian = subCategoryAccordianId === id;

  return (
    <div onClick={() => setSubCategoryRefId(id)} className="pl-6">
      <p
        onClick={() => toggleSubCategoryAccordian(id)}
        className={`relative pb-3 pl-2 font-semibold cursor-pointer ${openAccordian && "text-primary"}`}
      >
        The Servant is dependent on his Lord
        <span className="absolute top-0 text-gray-300 -left-6">---</span>
      </p>
      {/* dua container */}
      {openAccordian ? (
        <div className={`w-full h-full space-y-3`}>
          <DuaContent id="111" />
          <DuaContent id="112" />
          <DuaContent id="113" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SubCategoryAccordian;
