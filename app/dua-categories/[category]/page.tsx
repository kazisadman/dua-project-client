import DuaCategoryPanel from "@/components/DuaCategoryPanel";
import Settings from "@/components/Settings";

const page = () => {
  return (
    <div className="absolute left-17 top-16.5 bg-black w-full h-screen">
      <DuaCategoryPanel />
      <Settings />
    </div>
  );
};

export default page;
