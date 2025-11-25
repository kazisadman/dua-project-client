import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiBookmark, CiPlay1, CiShare2 } from "react-icons/ci";
import { GoCopy } from "react-icons/go";

interface props {
  data: {
    id: number;
    subCategory_id: number;
    category_id: number;
    title: string;
    description: string;
    arabic: string;
    transliteration: string;
    translation: string;
    reference: {
      hadith: string;
      ref_no: number;
    };
  };
  index: number;
}

const DuaCard = ({ data, index }: props) => {
  const {
    id,
    title,
    description,
    arabic,
    translation,
    transliteration,
    reference,
  } = data;
  return (
    <div
      className="pt-5 pb-10 content-padding space-y-8 bg-backgound border-b border-gray-300"
    >
      <div className="flex-center gap-5">
        <Image src={"/card-icon.png"} alt="card-logo" width={24} height={24} />
        <h3 className="text-sm font-semibold text-primary">
          {index}. {title}
        </h3>
      </div>
      <p className="leading-7">{description}</p>
      <p className="text-[1.6rem] text-right leading-14 tracking-widest">
        {arabic}
      </p>
      <p className="leading-8 italic text-text-gray">{transliteration}</p>
      <div className="space-y-5">
        <p className="text-primary font-semibold">Translation</p>
        <p className="leading-7">{translation}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-7 justify-between">
        <div>
          <p className="text-text-gray">Refrence</p>
          <p>
            {reference.hadith}: <span>{reference.ref_no}</span>{" "}
          </p>
        </div>
        <div className="flex-center justify-between text-xl gap-7">
          <CiPlay1 />
          <CiBookmark />
          <GoCopy />
          <CiShare2 />
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
  );
};

export default DuaCard;
