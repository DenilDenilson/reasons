import { useState } from "react";
import KeyboardArrowDown from "./assets/KeyboardArrowDown";

export default function ({ textStyle, text }) {
  //const [textStyle, setTextStyle] = useState("title-small-bold");

  // if (text == "?") {
  //   setTextStyle("heading4");
  // }

  const [click, setClick] = useState(false);

  const changeClick = () => {
    setClick(!click);
  };

  return (
    <div
      onClick={changeClick}
      className="pr-1 pl-2 border-2 rounded border-base-500 gap-1"
    >
      <div className="flex justify-between items-center">
        <span className={`text-base-500  ${textStyle}`}>
          {click ? "selection" : "?"}
        </span>
        <KeyboardArrowDown width={24} height={24} fill={"#FE4D6B"} />
        {/* // Color base 500 */}
      </div>

      {click && (
        <>
          <div className="flex justify-between title-small-bold text-greys-TEXT py-1">
            dinero <span>💵</span>
          </div>
          <div className="flex justify-between title-small-bold text-greys-TEXT py-1">
            profesión <span>💼</span>
          </div>
          <div className="flex justify-between title-small-bold text-greys-TEXT py-1">
            familia <span>👨‍👩‍👧‍👦</span>
          </div>
        </>
      )}
    </div>
  );
}
