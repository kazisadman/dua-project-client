"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronRight, FaChevronUp } from "react-icons/fa";

const Settings = () => {
  const [rangeValue, setRangeValue] = useState("0");
  console.log(rangeValue);
  return (
    <section className="fixed right-0 hidden w-70 py-3.5 top-16 xl:block border text-sm">
      {/* font settings */}
      <div>
        <div className="justify-between gap-4 p-2.5 flex-center">
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
        <div>
          <label htmlFor="range" className="font-medium ">
            Arabic Font Size
          </label>
          <div className="justify-between gap-4 py-3 flex-center">
            <input
              className="w-full"
              value={rangeValue}
              id="range"
              onChange={(e) => setRangeValue(e.target.value)}
              type="range"
              min="0"
              max="50"
            />
            <p className="font-semibold text-primary">{rangeValue}</p>
          </div>
        </div>
        <div>
          <p className="font-medium">Arabic Script & Font Face</p>
          <button className="justify-between w-full px-4 py-3 rounded-xl flex-center bg-settings-btn">
            Uthma <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Settings;
