import Cloudy from "./assets/Cloudy";
import Favorite from "./assets/Favorite";
import Quote from "./assets/Quote";

export default function NavBot() {
  return (
    <footer className="grid grid-cols-3 pt-4 pb-4 shadow-[0px_-2px_4px_rgba(98,0,107,0.25)] fixed bottom-0 w-full bg-greys-BG">
      <div className="flex flex-col items-center gap-1">
        <Cloudy isFilled={true} />
        <span className="title-small-bold text-base-500">Sueños</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Favorite isFilled={false} />
        <span className="title-small-bold text-purple-900">Motivos</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Quote isFilled={false} />
        <span className="title-small-bold text-purple-900">Frases</span>
      </div>
    </footer>
  );
}
