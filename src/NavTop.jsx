import { useState } from "react";
import Person from "./assets/Person";
import NavTopOption from "./NavTopOption";
import NavTopOptions from "./NavTopOptions";

export default function NavTop({ onClick, showModal }) {
  return (
    <div className="flex justify-between px-4 pt-4 fixed top-0 bg-greys-BG w-full">
      <span className="font-Kalam text-2xl text-base-500 leading-[1.4] font-bold">
        Reasons
      </span>
      <span onClick={onClick} className="">
        <Person width="32" height="32" color="#FE4D6B" />
        {showModal && (
          <div className="absolute w-screen h-screen backdrop-blur-sm -left-0">
            <NavTopOptions />
          </div>
        )}
      </span>
    </div>
  );
}
