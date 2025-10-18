import { useState, type ChangeEvent } from "react";
import iconArrowRight from "./assets/icon-arrow-right.svg";
import iconCheck from "./assets/icon-check.svg";
import iconCopy from "./assets/icon-copy.svg";
import "./App.css";

const Strength = {
  WEAK: "WEAK",
  MEDIUM: "MEDIUM",
  STRONG: "STRONG",
} as const;
type Strength = (typeof Strength)[keyof typeof Strength];

function App() {
  const [password, setPassword] = useState<string>("PTx1f5DaFX");
  const [strength, setStrength] = useState<Strength>(Strength.WEAK);
  const [characterLength, setCharacterLength] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCharacterLength(Number(event.target.value));
  };

  return (
    <div className="bg-[#08070B] flex flex-col items-center justify-center min-h-screen ">
      <div className="max-w-[540px] w-full">
        <h3 className="text-[16px]">Password Generator</h3>
        <div className="bg-[#24232C] p-4 my-4">
          <button className="flex flex-row items-center justify-between w-full">
            <h5 className="text-2xl"> {password}</h5>
            <div className="flex flex-row items-center gap-2 mt-2">
              <p className="text-[18px] text-[#A4FFAF]">COPIED</p>
              <img src={iconCopy} alt="" />
            </div>
          </button>
        </div>

        <div className="bg-[#24232C] p-4">
          <div>
            <div className=" flex flex-row items-center  justify-between ">
              <label
                htmlFor="minmax-range"
                className="block mb-2  text-[16px] font-medium text-gray-900 dark:text-white"
              >
                Character Length
              </label>

              <p className="text-[32px] text-[#A4FFAF]">{characterLength}</p>
            </div>
            <input
              id="minmax-range"
              onChange={(e) => handleChange(e)}
              type="range"
              min="0"
              max="20"
              value={characterLength}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>

          <p className="text-[16px] py-2">Include Uppercase Letters</p>
          <p className="text-[16px] py-2">Include Lowercase Letters</p>
          <p className="text-[16px] py-2">Include Numbers</p>
          <p className="text-[16px] py-2">Include Symbols</p>

          <div className="bg-[#18171F] p-4 my-8 flex flex-row items-center justify-between w-full">
            <p className="text-[16px]">STRENGTH</p>
            <div className="flex flex-row items-center gap-2">
              <p className="text-[24px]">{strength}</p>
              <div className="flex flex-row items-center gap-2">
                <div className="w-[10px] h-[28px] bg-[#F8CD65]"></div>
                <div className="w-[10px] h-[28px] bg-[#F8CD65]"></div>
                <div className="w-[10px] h-[28px] bg-[#F8CD65]"></div>
                <div className="w-[10px] h-[28px] bg-[#F8CD65]"></div>
              </div>
            </div>
          </div>

          <button className="bg-[#A4FFAF] py-4 w-full flex flex-row items-center justify-center gap-4">
            <p className="text-[16px] text-[#24232C]">GENERATE</p>
            <img src={iconArrowRight} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
