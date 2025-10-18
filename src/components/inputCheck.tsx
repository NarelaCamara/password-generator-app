import { useState } from "react";
import iconCheck from "../assets/icon-check.svg";

export const InputCheck = ({
  text,
  onClick,
}: {
  text: string;
  onClick: (delta: number) => void;
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-row items-center justify-align gap-4 m-4 ">
      <button
        onClick={() => {
          setChecked(!checked);
          onClick(checked ? -1 : 1);
        }}
        className={`w-[20px] h-[20px]  flex flex-row items-center justify-center ${
          checked ? "border-2 border-amber-50" : "bg-[#A4FFAF]"
        } `}
      >
        <img src={iconCheck} alt="" className={checked ? "hidden" : "show"} />
      </button>
      <p className="text-[16px]">{text}</p>
    </div>
  );
};
