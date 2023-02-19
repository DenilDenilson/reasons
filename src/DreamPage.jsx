import DreamContainer from "./DreamContainer";
import NavTop from "./NavTop";
import VisionContainer from "./VisionContainer";
import NavBottom from "./NavBot";
import Add from "./assets/Add";
import FixedButtom from "./FixedButtom";

export default function DreamPage() {
  return (
    <div className="min-h-screen relative bg-greys-BG">
      <NavTop />
      <div className="px-4 pt-14 pb-20">
        <VisionContainer />
        <DreamContainer />
      </div>
      <NavBottom />
      <FixedButtom />
    </div>
  );
}
