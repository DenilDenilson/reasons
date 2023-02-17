import Person from "./assets/Person";

export default function NavTop() {
  return (
    <div className="flex justify-between">
      <span className="font-Kalam text-2xl text-base-500 leading-[1.4] font-bold">
        Reasons
      </span>
      <Person width="32" height="32" color="#FE4D6B" />
    </div>
  );
}
