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
  };

  return (
    <div className="min-h-screen relative bg-greys-BG">
      <NavTop onClick={openModal} />
      <Outlet />
      <NavBot />
      <FixedButtom />
      {showModal && <NavTopOptions />}
    </div>
  );
}
