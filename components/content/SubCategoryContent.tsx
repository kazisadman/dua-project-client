import { useUIState } from "@/store/useUIStore";
import DuaCard from "./DuaCard";
import { useEffect } from "react";

interface props {
  id: string;
}

const SubCategoryContent = ({ id }: props) => {
    const { duaRefId } = useUIState();
  
    useEffect(() => {
      document
        .getElementById(duaRefId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [duaRefId]);
console.log(duaRefId);
  
  return (
    <>
      <div id={id} className="page-header  content-padding py-5.5">
        <h2 className="font-semibold text-sm text-primary">
          Section:{" "}
          <span className="font-normal text-text">
            The servent is dependent on his lord
          </span>
        </h2>
      </div>
      <div>
        <DuaCard id="111"/>
        <DuaCard id="112"/>
        <DuaCard id="113"/>
      </div>
    </>
  );
};

export default SubCategoryContent;
