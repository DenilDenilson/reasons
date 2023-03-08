import NavTopOption from "./NavTopOption";
import Person from "./assets/Person";
import Clock from "./assets/Clock";
import Money from "./assets/Money";
import MailBox from "./assets/MailBox";

export default function NavTopOptions() {
  return (
    <ul className="absolute right-0 flex flex-col p-4 bg-greys-BG gap-4 border-2 border-base-600 rounded-lg">
      <li className="w-64 bg-greys-BG">
        <a href="" className="flex gap-4">
          <span>
            <Person width={24} height={24} fill={"#FE163D"} />
          </span>
          <NavTopOption text={"Mi perfil"} />
        </a>
      </li>
      <li className="w-64 bg-greys-BG">
        <a href="" className="flex gap-4">
          <span>
            <Clock width={24} height={24} fill={"#FE163D"} />
          </span>
          <NavTopOption text={"Mis horas doradas"} />
        </a>
      </li>
      <li className="w-64 bg-greys-BG">
        <a href="" className="flex gap-4">
          <span>
            <Money width={24} height={24} fill={"#FE163D"} />
          </span>
          <NavTopOption text={"Quiero donar"} />
        </a>
      </li>
      <li className="w-64 bg-greys-BG">
        <a href="" className="flex gap-4">
          <span>
            <MailBox width={24} height={24} fill={"#FE163D"} />
          </span>
          <NavTopOption text={"Tengo un feedback"} />
        </a>
      </li>
    </ul>
  );
}
