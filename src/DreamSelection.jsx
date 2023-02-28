import { useState } from "react";
import KeyboardArrowDown from "./assets/KeyboardArrowDown";

export default function ({ textStyle, text }) {
  //const [textStyle, setTextStyle] = useState("title-small-bold");

  // if (text == "?") {
  //   setTextStyle("heading4");
  // }

  return (
    <div className="flex items-center justify-between pr-1 pl-2 border-2 rounded border-base-500 gap-1">
      <span className={`text-base-500  ${textStyle}`}>{text}</span>
      <KeyboardArrowDown width={24} height={24} fill={"#FE4D6B"} />
      {/* // Color base 500 */}
    </div>
  );
}
