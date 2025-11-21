import DuaCategoryPanel from "@/components/category panel/DuaCategoryPanel";
import DuaMobilePanel from "@/components/category panel/DuaMobilePanel";
import Settings from "@/components/settings panel/Settings";
import SettingsMobilePanel from "@/components/settings panel/SettingsMobilePanel";
import BreadCrumbMenu from "@/components/ui/BreadCrumbMenu";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen overflow-y-auto page-scrollbar">
      <div className="flex justify-between min-h-screen pt-16 lg:pl-17">
        {/* Dua category */}
        <div className="show-lg">
          <DuaCategoryPanel />
        </div>

        {/* Content panel */}
        <div className="flex-1 w-full">
          <BreadCrumbMenu />
          {children}
        </div>

        {/* Settings panle */}
        <div className="hidden 2xl:block">
          <Settings />
        </div>
      </div>

      {/* Smaller screen */}
      <DuaMobilePanel />
      <SettingsMobilePanel />
    </div>
  );
};

export default layout;
