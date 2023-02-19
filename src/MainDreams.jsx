import DreamContainer from "./DreamContainer";
import VisionContainer from "./VisionContainer";

export default function MainDreams() {
  return (
    <main className="px-4 pt-14 pb-24 flex flex-col gap-4">
      <VisionContainer />
      <DreamContainer />
    </main>
  );
}
