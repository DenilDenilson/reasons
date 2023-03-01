import Close from "./assets/Close";
import SecondaryButton from "./assets/SecondaryButton";
import DreamSelection from "./DreamSelection";

export default function ModalMore({ text, closeModel }) {
  return (
    <section className="bg-greys-BG w-80 flex flex-col gap-4 absolute top-40 left-0 right-0 m-auto p-4 shadow-xl rounded-lg">
      <p className="heading4 text-greys-TITLE flex justify-between">
        {text}
        <span onClick={closeModel}>
          <Close className="bg-base-500 rounded-full" />{" "}
        </span>
      </p>
      <textarea
        className="placeholder-greys-BORDER placeholder:small-regular border-[1px] border-greys-BORDER h-24 p-2 rounded-lg border-opacity-50 small-regular text-greys-TEXT outline-1 focus:outline-base-500"
        placeholder="Escribe aquí tu sueño..."
      />
      <div className="flex justify-between items-center">
        <DreamSelection text={"Selection"} textStyle={"title-small-bold"} />
        <SecondaryButton text={"Añadir"} />
      </div>
    </section>
  );
}
