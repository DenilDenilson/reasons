import NavTopOption from "./NavTopOption";

export default function NavTopOptions() {
  return (
    <ul className="absolute right-0">
      <NavTopOption text={"Mi perfil"} />
      <NavTopOption text={"Mis horas doradas"} />
      <NavTopOption text={"Quiero donar"} />
      <NavTopOption text={"Tengo un feedback"} />
      {/* <li>HAAAAAAAAAAAAA</li> */}
    </ul>
  );
}
