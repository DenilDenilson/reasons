import DreamSelection from "./DreamSelection";
import Heading4 from "./Heading4";
import user from "./assets/user";

export default function ReasonContainer() {
  let i = 1;
  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-start h-7">
        <Heading4 content={"Mis motivos son"} />
        <DreamSelection text={"?"} textStyle={"heading4"} />
      </div>
      <ul className="flex flex-col gap-2">
        {user.motivos.map((motivo) => (
          <li key={motivo.id} className="flex justify-between items-center">
            <span className="small-regular text-greys-TEXT w-72 truncate">
              {i++}. {motivo.content}
            </span>{" "}
            <span>{motivo.emoji}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
