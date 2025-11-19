"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronRight, FaChevronUp } from "react-icons/fa";
import RangeSlider from "./RangeSlider";

const Settings = () => {
  const [arabicFontValue, setArabicFontValue] = useState<string>("0");
  const [translationFontValue, setTranslationFontValue] = useState<string>("0");
  return (
    <section className="fixed right-0 hidden py-6 text-sm w-80 top-16 xl:block">
      {/* font settings */}
      <div className="pl-8 pr-6 ">
        <div className="justify-between gap-4 flex-center">
          <div className="w-8.5 h-8.5 flex justify-center items-center bg-navbar-icon rounded-full">
            <Image
              src={"/settings/smallcaps.png"}
              alt="font-setting"
              width={18}
              height={18}
            />
          </div>
          <p className="flex-1 font-semibold text-primary">Font Settings</p>
          <FaChevronUp className=" text-primary" />
        </div>
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
      </div>
    </section>
  );
};

export default Settings;
