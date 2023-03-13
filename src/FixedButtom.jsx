import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Add from "./assets/Add";
import Shuffle from "./assets/Shuffle";
import ModalMore from "./ModalMore";

export default function FixedButtom() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [modal_page, setModal_page] = useState({});
  const modal = {
    dream: {
      text: "Un sueño mas",
      textholder: "Escribe aquí tu sueño",
    },
    reason: {
      text: "Un motivo más",
      textholder: "Escribe aquí tu motivo",
    },
    quote: {
      text: "Una frase más",
      textholder: "Escribe aquí tu frase",
    },
  };

  useEffect(() => {
    if (location.pathname.includes("reason")) {
      setModal_page(modal.reason);
    } else if (location.pathname.includes("quote")) {
      setModal_page(modal.quote);
    } else {
      setModal_page(modal.dream);
    }
  }, [location]);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
        <ModalMore
          text={modal_page.text}
          closeModal={closeModal}
          textholder={modal_page.textholder}
        />
      )}
    </>
  );
}
