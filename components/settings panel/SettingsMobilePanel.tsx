"use client";

import { useUIState } from "@/store/useUIStore";
import Settings from "./Settings";

const SettingsMobilePanel = () => {
  const { isSettingOpen, toggleSettings } = useUIState();
  return (
    <>
      <div
        onClick={toggleSettings}
        className={`fixed inset-0 z-0 bg-black opacity-10 2xl:hidden ${isSettingOpen ? "block" : "hidden"}`}
      />

      <div
        className={`settings-mobile
            ${isSettingOpen ? "translate-x-0" : "translate-x-full"} `}
      >
        <Settings />
      </div>
    </>
  );
};

export default SettingsMobilePanel;
