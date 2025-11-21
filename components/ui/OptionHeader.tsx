import Image from "next/image";

interface prop {
  icon: string;
  title: string;
  arrow: React.ComponentType<{ className: string }>;
}

const OptionHeader = ({ icon, title, arrow: Arrow }: prop) => {
  return (
    <div className="justify-between gap-4 py-3 flex-center">
      <div className="w-8.5 h-8.5 flex justify-center items-center bg-navbar-icon rounded-full">
        <Image src={icon} alt="font-setting" width={18} height={18} />
      </div>
      <p className="flex-1 font-semibold text-primary">{title}</p>
      <Arrow className="text-primary" />
    </div>
  );
};

export default OptionHeader;
