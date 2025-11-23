import { useUIState } from "@/store/useUIStore";
import DuaContent from "../category panel/DuaContent";
import { useFetchData } from "@/store/useFetchData";

interface Props {
  data: {
    id: number;
    title: string;
    category_id: number;
    duas_id: number[];
  };
}

const SubCategoryAccordian = ({ data }: Props) => {
  const { id, title } = data;
  const {
    subCategoryAccordianId,
    toggleSubCategoryAccordian,
    setSubCategoryRefId,
  } = useUIState();

  const openAccordian = subCategoryAccordianId === id;

  const { getDuas } = useFetchData();

  const matchedDuas= getDuas(subCategoryAccordianId)


  return (
    <div onClick={() => setSubCategoryRefId(id)} className="pl-6">
      <p
        onClick={() => toggleSubCategoryAccordian(id)}
        className={`relative pb-3 pl-2 font-semibold cursor-pointer ${openAccordian && "text-primary"}`}
      >
        {title}
        <span className="absolute top-0 text-gray-300 -left-6">---</span>
      </p>
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
