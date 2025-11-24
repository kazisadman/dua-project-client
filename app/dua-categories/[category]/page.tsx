import ContentPanel from "@/components/content/ContentPanel";
import Loader from "@/components/ui/Loader";
const page = async () => {
  return (
    <div>
      <Loader/>
      <ContentPanel />
    </div>
  );
};

export default page;
