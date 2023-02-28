import Heading4 from "./Heading4";
import user from "./assets/user";
import DreamSelection from "./DreamSelection";

export default function DreamContainer() {
  let i = 1;
  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Heading4 content={"Mis sueños son"} />
        <DreamSelection text={"?"} textStyle={"heading4"} />
      </div>
      <ul className="flex flex-col gap-2">
        {user.dreams.map((dream) => (
          <li key={dream.id} className="flex justify-between items-center">
            <span className="small-regular text-greys-TEXT w-72 truncate">
              {i++}. {dream.content}
            </span>{" "}
            <span>{dream.emoji}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
