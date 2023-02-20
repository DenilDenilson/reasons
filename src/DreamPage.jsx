import DreamContainer from "./DreamContainer";
import NavTop from "./NavTop";
import VisionContainer from "./VisionContainer";
import NavBottom from "./NavBot";
import Add from "./assets/Add";
import FixedButtom from "./FixedButtom";
import MainDreams from "./MainDreams";
import { Outlet } from "react-router-dom";
import NavBot from "./NavBot";

export default function DreamPage() {
  return (
    <div className="min-h-screen relative bg-greys-BG">
      <NavTop />
      <Outlet />
      <NavBot />
      <FixedButtom />
    </div>
  );
}
