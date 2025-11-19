import { MdCancel } from "react-icons/md";

interface props {
  Icon: React.ComponentType<{ className: string }>;
  title: string;
  toggleFn: () => void;
}

const AsidePanelHeader = ({ Icon, title, toggleFn }: props) => {
  return (
    <div className="flex justify-between py-3 cursor-pointer">
      <div className="gap-2 flex-center">
        <Icon className="text-2xl" />
        <p className="text-lg font-bold">{title}</p>
      </div>
      <MdCancel onClick={toggleFn} className="text-xl" />
    </div>
  );
};

export default AsidePanelHeader;
