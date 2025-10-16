import { useState, type ChangeEvent } from "react";
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
          <button>
            <h5 className="text-2xl"> {password}</h5>{" "}
            <p className="text-[16px]">COPIED</p>
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

              <p>{characterLength}</p>
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

          <div className="bg-[#18171F] p-4 my-8">
            <p className="text-[16px]">STRENGTH</p>
            <p className="text-[18px]">{strength}</p>
          </div>

          <button className="bg-[#A4FFAF] py-4 w-full ">
            <p className="text-[16px] text-[#24232C]">GENERATE</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
