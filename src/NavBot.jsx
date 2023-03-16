import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Cloudy from "./assets/Cloudy";
import Favorite from "./assets/Favorite";
import Quote from "./assets/Quote";

export default function NavBot() {
  let location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("dream")) {
      setFilledCloudy(true);
      setFilledFavorite(false);
      setFilledQuote(false);

      // Letras
      spanCloudy.current.classList.add("text-base-500");
      spanCloudy.current.classList.remove("text-purple-900");
      spanFavorite.current.classList.remove("text-base-500");
      spanFavorite.current.classList.add("text-purple-900");
      spanQuote.current.classList.remove("text-base-500");
      spanQuote.current.classList.add("text-purple-900");
    } else if (location.pathname.includes("reasons")) {
      setFilledCloudy(false);
      setFilledFavorite(true);
      setFilledQuote(false);
      spanCloudy.current.classList.remove("text-base-500");
      spanCloudy.current.classList.add("text-purple-900");
      spanFavorite.current.classList.add("text-base-500");
      spanFavorite.current.classList.remove("text-purple-900");
      spanQuote.current.classList.remove("text-base-500");
      spanQuote.current.classList.add("text-purple-900");
    } else {
      setFilledCloudy(false);
      setFilledFavorite(false);
      setFilledQuote(true);
      spanCloudy.current.classList.remove("text-base-500");
      spanCloudy.current.classList.add("text-purple-900");
      spanFavorite.current.classList.remove("text-base-500");
      spanFavorite.current.classList.add("text-purple-900");
      spanQuote.current.classList.add("text-base-500");
      spanQuote.current.classList.remove("text-purple-900");
    }
  }, location);

  const [filledCloudy, setFilledCloudy] = useState(false);
  const [filledFavorite, setFilledFavorite] = useState(false);
  const [filledQuote, setFilledQuote] = useState(false);

  const spanCloudy = useRef();
  const spanFavorite = useRef();
  const spanQuote = useRef();

  return (
    <footer className="grid grid-cols-3 pt-4 pb-4 shadow-[0px_-2px_4px_rgba(98,0,107,0.25)] fixed bottom-0 w-full bg-greys-BG">
      <Link
        to="/dreams"
        className="flex flex-col items-center gap-1"
        onClick={() => {
          setFilledCloudy(true);
          setFilledFavorite(false);
          setFilledQuote(false);
          // Letras
          spanCloudy.current.classList.add("text-base-500");
          spanCloudy.current.classList.remove("text-purple-900");
          spanFavorite.current.classList.remove("text-base-500");
          spanFavorite.current.classList.add("text-purple-900");
          spanQuote.current.classList.remove("text-base-500");
          spanQuote.current.classList.add("text-purple-900");
        }}
      >
        <Cloudy isFilled={filledCloudy} />
        <span ref={spanCloudy} className="title-small-bold text-purple-900">
          Sueños
        </span>
      </Link>
      <Link
        to="/reasons"
        className="flex flex-col items-center gap-1"
        onClick={() => {
          setFilledFavorite(true);
          setFilledCloudy(false);
          setFilledQuote(false);
          spanCloudy.current.classList.remove("text-base-500");
          spanCloudy.current.classList.add("text-purple-900");
          spanFavorite.current.classList.add("text-base-500");
          spanFavorite.current.classList.remove("text-purple-900");
          spanQuote.current.classList.remove("text-base-500");
          spanQuote.current.classList.add("text-purple-900");
        }}
      >
        <Favorite isFilled={filledFavorite} />
        <span ref={spanFavorite} className="title-small-bold text-purple-900">
          Motivos
        </span>
      </Link>
      <Link
        to="/quotes"
        className="flex flex-col items-center gap-1"
        onClick={() => {
          setFilledQuote(true);
          setFilledCloudy(false);
          setFilledFavorite(false);
          spanCloudy.current.classList.remove("text-base-500");
          spanCloudy.current.classList.add("text-purple-900");
          spanFavorite.current.classList.remove("text-base-500");
          spanFavorite.current.classList.add("text-purple-900");
          spanQuote.current.classList.add("text-base-500");
          spanQuote.current.classList.remove("text-purple-900");
        }}
      >
        <Quote isFilled={filledQuote} />
        <span ref={spanQuote} className="title-small-bold text-purple-900">
          Frases
        </span>
      </Link>
    </footer>
  );
}
