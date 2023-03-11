import { useState } from "react";
import Person from "./assets/Person";
import NavTopOption from "./NavTopOption";
import NavTopOptions from "./NavTopOptions";

export default function NavTop({ onClick }) {
  return (
    <div className="flex justify-between px-4 pt-4 fixed top-0 bg-greys-BG w-full">
      <span className="font-Kalam text-2xl text-base-500 leading-[1.4] font-bold">
        Reasons
      </span>
      <span onClick={onClick} className="relative">
        <Person width="32" height="32" color="#FE4D6B" />
        {/* {showModal && <NavTopOptions />} // Lo saco de acá ya que se // */}
        {/* renderiza abajo del selectOption*/}
      </span>
    </div>
  );
}
