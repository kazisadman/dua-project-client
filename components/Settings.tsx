"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa";
import RangeSlider from "./RangeSlider";
import OptionHeader from "./OptionHeader";

const Settings = () => {
  const [arabicFontValue, setArabicFontValue] = useState<string>("0");
  const [translationFontValue, setTranslationFontValue] = useState<string>("0");
  return (
    <section className="settings">
      {/* font settings */}
      <div className="pl-8 pr-6 ">
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

        <OptionHeader
          title={"View Settings"}
          arrow={FaChevronDown}
          icon="/settings/copy-success.png"
        />
        <OptionHeader
          title={"Apperance Settings"}
          arrow={FaChevronDown}
          icon="/navbar/color-swatch-icon.png"
        />
      </div>
    </section>
  );
};

export default Settings;
