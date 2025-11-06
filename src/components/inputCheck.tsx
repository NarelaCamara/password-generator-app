import { useState } from "react";
import iconCheck from "../assets/icon-check.svg";

export const InputCheck = ({
  text,
  onClick,
}: {
  text: string;
  onClick: (delta: number, text: string) => void;
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-row items-center justify-align gap-4 m-4 ">
      <button
        onClick={() => {
          setChecked(!checked);
          onClick(checked ? -1 : 1, text);
        }}
        className={`w-[20px] h-[20px]  flex flex-row items-center justify-center ${
          checked ? "bg-[#A4FFAF]" : "border-2 border-amber-50"
        } `}
      >
        <img src={iconCheck} alt="" className={checked ? "show" : "hidden"} />
      </button>
      <p className="text-[16px]">{text}</p>
    </div>
  );
};
