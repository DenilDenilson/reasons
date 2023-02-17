import Heading4 from "./Heading4";
import user from "./assets/user";

export default function DreamContainer() {
  let i = 1;
  return (
    <section>
      <Heading4 content={"Mis sueños son"} />
      <span>🙉</span>
      <ul>
        {user.dreams.map((dream) => (
          <li className="small-regular text-greys-TEXT">
            {i++}. {dream}
          </li>
        ))}
      </ul>
    </section>
  );
}
