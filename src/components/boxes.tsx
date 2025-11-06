import { Strength } from "../App";
export const Boxes = ({ strength }: { strength: Strength }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <div
        className={`w-[10px] h-[28px] ${
          strength === Strength.WEAK ||
          strength === Strength.MEDIUM ||
          strength === Strength.STRONG
            ? "bg-[#F8CD65]"
            : "border-2 border-amber-50"
        }  `}
      ></div>
      <div
        className={`w-[10px] h-[28px] ${
          strength === Strength.MEDIUM || strength === Strength.STRONG
            ? "bg-[#F8CD65]"
            : "border-2 border-amber-50"
        } `}
      ></div>
      <div
        className={`w-[10px] h-[28px] ${
          strength === Strength.MEDIUM || strength === Strength.STRONG
            ? "bg-[#F8CD65]"
            : "border-2 border-amber-50"
        }  `}
      ></div>
      <div
        className={`w-[10px] h-[28px] ${
          strength === Strength.STRONG
            ? "bg-[#F8CD65]"
            : "border-2 border-amber-50"
        }    `}
      ></div>
    </div>
  );
};
