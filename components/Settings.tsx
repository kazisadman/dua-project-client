"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa";
import RangeSlider from "./RangeSlider";
import OptionHeader from "./OptionHeader";
import { useUIState } from "@/store/useUIStore";
import { MdSettings } from "react-icons/md";
import AsidePanelHeader from "./AsidePanelHeader";

const Settings = () => {
  const [arabicFontValue, setArabicFontValue] = useState<string>("0");
  const [translationFontValue, setTranslationFontValue] = useState<string>("0");

  const { isSettingOpen, toggleSettings } = useUIState();

  return (
    <>
      <section
        className={`2xl:translate-x-0 ${isSettingOpen ? "translate-x-0" : "translate-x-full"} aside-container settings`}
      >
        {/* aside panel header */}
        <div className="2xl:hidden">
          <AsidePanelHeader
            title="Settings"
            Icon={MdSettings}
            toggleFn={toggleSettings}
          />
        </div>

        {/* aside panel content */}
        <div>
          {/* font settings */}
          <OptionHeader
            title={"Font Settings"}
            arrow={FaChevronUp}
            icon="/settings/smallcaps.png"
          />
          {/* Arabic font slider */}
          <RangeSlider
            rangeValue={arabicFontValue}
            setRangeValue={setArabicFontValue}
            title={"Arabic Font Size"}
          />
          {/* translation font slider */}
          <RangeSlider
            rangeValue={translationFontValue}
            setRangeValue={setTranslationFontValue}
            title={"Translation Font Size"}
          />

          <div className="py-3 mx-2">
            <p className="font-medium">Arabic Script & Font Face</p>
            <button className="justify-between w-full px-4 py-3 mt-2 rounded-xl flex-center bg-settings-btn">
              Uthma <FaChevronRight />
            </button>
          </div>

          {/* view settings */}
          <OptionHeader
            title={"View Settings"}
            arrow={FaChevronDown}
            icon="/settings/copy-success.png"
          />

          {/* theme settings */}
          <OptionHeader
            title={"Apperance Settings"}
            arrow={FaChevronDown}
            icon="/navbar/color-swatch-icon.png"
          />
        </div>
      </section>

      {/* overlay */}
      <div
        className={`fixed z-40 inset-0 bg-black opacity-10 ${isSettingOpen ? "block" : "hidden"}`}
      />
    </>
  );
};

export default Settings;
