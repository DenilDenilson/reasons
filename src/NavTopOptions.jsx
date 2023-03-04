import NavTopOption from "./NavTopOption";

export default function NavTopOptions() {
  return (
    <ul className="absolute right-0 flex flex-col p-4 bg-greys-BG gap-4 border-2 border-base-600 rounded-lg">
      <NavTopOption text={"Mi perfil"} />
      <NavTopOption text={"Mis horas doradas"} />
      <NavTopOption text={"Quiero donar"} />
      <NavTopOption text={"Tengo un feedback"} />
    </ul>
  );
}
