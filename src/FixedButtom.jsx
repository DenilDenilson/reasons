import { useLocation } from "react-router";
import Add from "./assets/Add";
import Shuffle from "./assets/Shuffle";

export default function FixedButtom() {
  const location = useLocation();

  console.log(location);
  console.log(location.pathname.includes("quote"));

  return (
    <div className="fixed bottom-28 right-4 shadow-[2px_2px_4px_rgba(31,31,31,0.5)] bg-base-600 rounded-full">
      {location.pathname.includes("quote") ? (
        <Shuffle className="rotate-180 p-1" />
      ) : (
        <Add />
      )}
    </div>
  );
}
