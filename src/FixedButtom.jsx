import { useState } from "react";
import { useLocation } from "react-router";
import Add from "./assets/Add";
import Shuffle from "./assets/Shuffle";
import ModalMore from "./ModalMore";

export default function FixedButtom() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // console.log(location);
  // console.log(location.pathname.includes("quote"));

  return (
    <>
      <div
        onClick={openModal}
        className="fixed bottom-28 right-4 shadow-[2px_2px_4px_rgba(31,31,31,0.5)] bg-base-600 rounded-full"
      >
        {location.pathname.includes("quote") ? (
          <Shuffle className="rotate-180 p-1" />
        ) : (
          <Add />
        )}
      </div>
      {showModal && (
        // <h1 className="bg-salmon-900 w-28 h-24 absolute top-0 left-0 right-0 bottom-0 m-auto">
        //   GA
        // </h1>
        <ModalMore text={"Un sueño más"} closeModel={closeModal} />
      )}
    </>
  );
}
