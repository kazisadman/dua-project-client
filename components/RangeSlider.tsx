import { Dispatch, SetStateAction } from "react";

interface data {
  title: string;
  rangeValue: string;
  setRangeValue: Dispatch<SetStateAction<string>>;
}

const RangeSlider = ({ title, rangeValue, setRangeValue }: data) => {
  return (
    <div className="py-3 mx-2">
      <label htmlFor="range" className="font-medium ">
        {title}
      </label>
      <div className="justify-between gap-4 flex-center">
        <div className="relative w-full">
          <div
            className={`absolute rounded-full h-1 bg-primary top-[50%] z-20`}
            style={{ width: `${rangeValue}%` }}
          ></div>
          <input
            className="relative w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer slider"
            value={rangeValue}
            id="range"
            onChange={(e) => setRangeValue(e.target.value)}
            type="range"
            min={0}
            max={100}
          />
        </div>
        <p className="w-10 font-semibold text-right text-primary">
          {rangeValue}
        </p>
      </div>
    </div>
  );
};

export default RangeSlider;
