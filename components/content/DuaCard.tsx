import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiBookmark, CiPlay1, CiShare2 } from "react-icons/ci";
import { GoCopy } from "react-icons/go";

interface props{
  id:string
}

const DuaCard = ({id}:props) => {
  return (
    <div id={id} className="pt-5 pb-10 content-padding space-y-8 bg-backgound border-b border-gray-300">
      <div className="flex-center gap-5">
        <Image src={"/card-icon.png"} alt="card-logo" width={24} height={24} />
        <h3 className="text-sm font-semibold text-primary">
          02. Dua After Prayer for Rizq and Help
        </h3>
      </div>
      <p className="leading-7">
        Prophet (ﷺ) used to say after every compulsory prayer, The servant will
        ask his Lord for all of his religiously and worldly needs, because the
        treasure of all things is in the hands of Allah. Allah says
        (interpretation of the meaning): “And there is not a thing but that with
        Us are its depositories, and We do not send it down except according to
        a known measure.” (Sura Al-Hijr 15:21) No one can withhold what Allah
        gives; And, no one can give what he resists.
      </p>
      <p className="text-[1.6rem] text-right leading-14 tracking-widest">
        لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ
        وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا
        مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ
        ذَا الْجَدِّ مِنْكَ الْجَدُّ
      </p>
      <p className="leading-8 italic text-text-gray">
        Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa
        lahul-hamdu wa huwa &apos;alaa kulli shay&apos;in qadir. Allaahumma laa
        maani&apos;a limaa a&apos;taita wa laa mu&apos;tia limaa mana&apos;ta wa
        laa yanfa&apos;u dhal-jaddi minka al-jaddu
      </p>
      <div className="space-y-5">
        <p className="text-primary font-semibold">Translation</p>
        <p className="leading-7">
          There is none worthy of worship except Allah alone with no partner or
          associate. He is the Dominion and to Him be all praise, and He is able
          to do all things. O Allah, one can withhold what You have given and
          none can give what You have withheld, and no wealth or fortune can
          benefit anyone for from You comes all wealth and fortune.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-7 justify-between">
        <div>
          <p className="text-text-gray">Refrence</p>
          <p>
            Bukhari: <span>844</span>{" "}
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
