import QuoteRounded from "./assets/QuoteRounded";

export default function MainQuote() {
  return (
    <main className="absolute left-0 right-0 top-0 bottom-0 m-auto flex items-center justify-center">
      <div className="flex gap-1">
        <QuoteRounded class="rotate-180" />
        <p className="bigger-regular text-greys-TEXT">
          Todo ladrillo hace castillo
        </p>
        <QuoteRounded />
        {/* // Se puede usar un className también xd */}
      </div>
    </main>
  );
}
