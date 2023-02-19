import ReasonContainer from "./ReasonContainer";
import VisionContainer from "./VisionContainer";

export default function MainReasons() {
  return (
    <main className="px-4 pt-14 pb-24 flex flex-col gap-4">
      <VisionContainer />
      <ReasonContainer />
    </main>
  );
}
