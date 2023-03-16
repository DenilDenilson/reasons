import NavTop from "./NavTop";
import FixedButtom from "./FixedButtom";
import { Outlet } from "react-router-dom";
import NavBot from "./NavBot";
import NavTopOptions from "./NavTopOptions";
import { useState } from "react";

export default function MainPage() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
    document.body.classList.toggle("overflow-y-hidden");
  };

  return (
    <div className=" bg-greys-BG">
      <Outlet />
      <NavTop onClick={openModal} showModal={showModal} />
      <NavBot />
      <FixedButtom />
    </div>
  );
}
