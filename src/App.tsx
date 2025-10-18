import "./App.css";
import { useState, type ChangeEvent, type CSSProperties } from "react";
import iconCopy from "./assets/icon-copy.svg";
import iconArrowRight from "./assets/icon-arrow-right.svg";
import { InputCheck } from "./components/inputCheck";

const Strength = {
  WEAK: "WEAK",
  /** Criterio,Descripción
   * Longitud,≤7 caracteres.
   * Checkpoints,≤2 checkpoints activados.
   * Ejemplo,"mypass (6 caracteres, solo minúsculas, 1 checkpoint)." */
  MEDIUM: "MEDIUM",
  /**Criterio,Descripción
   * Longitud,≥8 Y ≤11 caracteres.
   * Checkpoints,≥3 checkpoints activados O ≥12 caracteres con ≤2 checkpoints activados.
   * Ejemplo 1,"M1pass_ (8 caracteres, 4 checkpoints: Mayús, Minús, Núm, Símbolo)."
   * Ejemplo 2,"passwordlong (12 caracteres, 2 checkpoints: Minús, Mayús -
  asumiendo que l es minúscula y L mayúscula en otro caso, pero si es solo minúsculas y números: pass12345678, 12 caracteres, 2 checkpoints)." */
  STRONG: "STRONG",
  /**Criterio,Descripción
   * Longitud,≥12 caracteres.
   * Checkpoints,≥3 checkpoints activados.
   * Criterio Óptimo,≥14 caracteres Y los 4 checkpoints activados.
   * Ejemplo,"P@sswOrd12345! (14 caracteres, 4 checkpoints: Mayús, Minús, Núm, Símbolo)." */
} as const;
type Strength = (typeof Strength)[keyof typeof Strength];

function App() {
  const [password, setPassword] = useState<string>("PTx1f5DaFX");
  const [strength, setStrength] = useState<Strength>(Strength.WEAK);
  const [characterLength, setCharacterLength] = useState<number>(0);
  const [inputChecks, setInputChecks] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleClickCheck = () => {
    setInputChecks((prev) => prev + 1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCharacterLength(Number(event.target.value));
  };

  const handleCopy = async () => {
    try {
      // Usamos la API de Clipboard moderna
      await navigator.clipboard.writeText(password);
      // Actualizamos el estado para mostrar el mensaje de éxito
      setCopied(true);
      // Opcional: Ocultar el mensaje de éxito después de 2 segundos,
      // como un efecto de magia que desaparece.
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Si hay un error (por ejemplo, el navegador no soporta la API)
      console.error("¡Fallo al copiar el texto!", err);
    }
  };

  return (
    <div className="bg-[#08070B] flex flex-col items-center justify-center min-h-screen ">
      <h3 className="text-[24px] text-[#817D92]">Password Generator</h3>
      <div className="max-w-[540px] w-full">
        <div className="bg-[#24232C] p-4 my-4">
          <div className="flex flex-row items-center justify-between w-full">
            <h5 className="text-2xl"> {password}</h5>
            <button
              data-tooltip-target="tooltip-click"
              data-tooltip-trigger="click"
              onClick={handleCopy}
              className="flex flex-row items-center gap-2 mt-2"
            >
              <p className="text-[18px] text-[#A4FFAF]">COPIED</p>
              <img src={iconCopy} alt="" />
            </button>
            {/* *** EL TOOLTIP CON CLASES DE TAILWIND ***
          Solo se renderiza si 'copiado' es true.
        */}
            {copied && (
              <div
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                          bg-green-500 text-white text-sm 
                          py-1 px-3 rounded shadow-lg whitespace-nowrap 
                          animate-fadeInDown"
              >
                ¡Copiado Correctamente! ✨
              </div>
            )}
          </div>
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
              style={
                {
                  ["--val"]: `${characterLength}`,
                  ["--max"]: "20",
                } as CSSProperties
              }
              value={characterLength}
              className="w-full h-2 bg-[#18171F] rounded-lg appearance-none cursor-pointer  range-green-tailwind"
            />
          </div>

          <div className="my-8">
            <InputCheck
              onClick={handleClickCheck}
              text="Include Uppercase Letters"
            />
            <InputCheck
              onClick={handleClickCheck}
              text="Include Lowercase Letters"
            />
            <InputCheck onClick={handleClickCheck} text="Include Numbers" />
            <InputCheck onClick={handleClickCheck} text="Include Symbols" />
          </div>

          <div className="bg-[#18171F] py-4 px-8 my-8 flex flex-row items-center justify-between w-full">
            <p className="text-[18px] text-[#817D92]">STRENGTH</p>
            <div className="flex flex-row items-center gap-2">
              <p className="text-[24px]">{strength}</p>
              <div className="flex flex-row items-center gap-2">
                <div className="w-[10px] h-[28px] bg-[#F8CD65]"></div>
                <div className="w-[10px] h-[28px] bg-[#F8CD65]"></div>
                <div className="w-[10px] h-[28px] bg-[#F8CD65]"></div>
                <div className="w-[10px] h-[28px] border-2 border-amber-50  "></div>
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
