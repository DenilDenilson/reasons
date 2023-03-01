import { useState } from "react";
import Person from "./assets/Person";
import NavTopOption from "./NavTopOption";
import NavTopOptions from "./NavTopOptions";

export default function NavTop() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-between px-4 pt-4 fixed top-0 bg-greys-BG w-full">
      <span className="font-Kalam text-2xl text-base-500 leading-[1.4] font-bold">
        Reasons
      </span>
      <span onClick={openModal} className="relative">
        <Person width="32" height="32" color="#FE4D6B" />
        {showModal && <NavTopOptions />}
      </span>
    </div>
  );
}
