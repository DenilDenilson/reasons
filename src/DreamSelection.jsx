import KeyboardArrowDown from "./assets/KeyboardArrowDown";

export default function () {
  return (
    <div className="flex items-center justify-between pr-1 pl-2 border-2 rounded border-base-500 w-14">
      <span className="heading4 text-base-500">?</span>
      <KeyboardArrowDown width={24} height={24} fill={"#FE4D6B"} />
      {/* // Color base 500 */}
    </div>
  );
}
