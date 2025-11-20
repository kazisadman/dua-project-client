import Image from "next/image";
import { MdCancel } from "react-icons/md";

interface props {
  Icon?: React.ComponentType<{ className: string }> | null;
  title: string;
  subtitle?: string | null;
  image?: string | null;
  toggleFn: () => void;
}

const AsidePanelHeader = ({
  Icon = null,
  image = null,
  title,
  subtitle = null,
  toggleFn,
}: props) => {
  return (
    <div className="flex justify-between py-3 cursor-pointer">
      <div className="gap-2 flex-center">
        {Icon && <Icon className="text-2xl" />}

        {image && <Image src={image} alt="logo" width={44} height={44} />}
        <div>
          <p className="text-lg font-bold">{title}</p>
          <p>{subtitle}</p>
        </div>
      </div>
      <MdCancel onClick={toggleFn} className="text-xl" />
    </div>
  );
};

export default AsidePanelHeader;
